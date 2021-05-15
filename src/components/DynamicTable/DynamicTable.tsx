import { useState, useEffect, memo, MouseEventHandler, ReactNode } from "react";

/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * External Imports
 */
import "date-fns";
import clsx from "clsx";
import shortid from "shortid";
import { format as formatDate } from "date-fns";

/**
 * Imports the component styles
 */
import { useStyles } from "./DynamicTable.styles";

/**
 * Imports Material UI components
 */
import Table, { TableProps } from "@material-ui/core/Table";
import TableBody, { TableBodyProps } from "@material-ui/core/TableBody";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import TableContainer, {
  TableContainerProps,
} from "@material-ui/core/TableContainer";
import TableHead, { TableHeadProps } from "@material-ui/core/TableHead";
import TableRow, { TableRowProps } from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import UndoIcon from "@material-ui/icons/Undo";
import Toolbar, { ToolbarProps } from "@material-ui/core/Toolbar";
import Paper, { PaperProps } from "@material-ui/core/Paper";
import InpuText from "../InputText";

/**
 * Defines the Order Type
 */
export type SortOrder = "asc" | "desc";

/**
 * Defines the table row data
 */
export interface TableRowData {
  [key: string]: any;
}

export type Plugin =
  | "withCount"
  | "withAdd"
  | "withSearch"
  | "withPagination"
  | "withStats"
  | "withSort"
  | "resetSearch"
  | "resetFilters"
  | "addResult";

/**
 * Defines the table column data
 */
export interface TableColumnData {
  isCounter?: boolean;
  label: string;
  rowKey: string | null;
  skipKey?: boolean;
  align?: TableCellProps["align"];
  displayCount?: (index: number) => number;
  sort?: boolean;
  searchField?: boolean;
  type?: "text" | "date";
}

/**
 * Defines the props interface
 */
export interface DynamicTableProps {
  loading?: boolean;
  config: {
    columns: TableColumnData[];
    rows: TableRowData[];
    plugins?: Plugin[];
    orderBy: string;
    order: SortOrder;
    dateFormat?: string;
    loadingComponent?: JSX.Element;
    notFoundComponent?: JSX.Element;
    materialProps?: {
      paperProps?: PaperProps;
      toolbarProps?: ToolbarProps;
      tableContainerProps?: TableContainerProps;
      tableProps?: TableProps;
      tableHeadProps?: TableHeadProps;
      tableBodyProps?: TableBodyProps;
    };
  };
  classes: {
    table: string;
    tableCell: TableCellProps["classes"];
    tableRow: TableRowProps["classes"];
  };
}

/**
 * Displays the component
 */
const DynamicTable: React.FC<DynamicTableProps> = (props) => {
  const { loading, config, classes } = props;

  const {
    rows,
    columns,
    materialProps = {},
    plugins,
    loadingComponent,
    notFoundComponent,
    dateFormat,
  } = config;

  const {
    paperProps,
    toolbarProps,
    tableContainerProps,
    tableProps,
    tableHeadProps,
    tableBodyProps,
  } = materialProps;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const baseClasses = useStyles();

  /**
   * Initializes the order (asc/desc)
   */
  const [order, setOrder] = useState(config.order);

  /**
   * Initializes the order by field
   */
  const [orderBy, setOrderBy] = useState(config.orderBy);

  /**
   * Initializes the table headers
   */
  const [tableHeaders, setTableHeaders] = useState<typeof columns>([]);

  /**
   * Initializes collection
   */
  const [collection, setCollection] = useState<typeof rows>([]);

  const [search, setSearch] = useState("");

  /**
   * Initializes the search loading state
   */
  const [searchLoading, setSearchLoading] = useState(false);

  /**
   * Initializes the search failed flag
   */
  const [searchFailed, setSearchFailed] = useState(false);

  /**
   * Initializes the inputs ready flag
   * Used to debounce all inputs, updating the inputs object, used in the onSubmit function
   */
  const [searchReady, setSearchReady] = useState(false);

  /**
   * Defines the table cell classes
   */
  const tableCellClasses: TableCellProps["classes"] = {
    head: classes.tableCell?.head,
    body: classes.tableCell?.body,
  };

  const tableRowClasses: TableRowProps["classes"] = {
    root: classes.tableRow?.root,
  };

  /**
   * Defines the comparator
   */
  const descendingComparator = (
    a: TableRowData,
    b: TableRowData,
    orderBy: string
  ) => {
    const orderByData = columns.find((column) => column.rowKey === orderBy);

    if (orderByData && orderByData.type === "date") {
      if (new Date(b[orderBy]).getTime() < new Date(a[orderBy]).getTime())
        return -1;
      if (new Date(b[orderBy]).getTime() > new Date(a[orderBy]).getTime())
        return 1;
      return 0;
    }

    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
  };

  /**
   * Handles getting the comparator
   */
  const getComparator: (order: SortOrder, orderBy: string) => any = (
    order,
    orderBy
  ) => {
    return order === "desc"
      ? (a: TableRowData, b: TableRowData) =>
          descendingComparator(a, b, orderBy)
      : (a: TableRowData, b: TableRowData) =>
          -descendingComparator(a, b, orderBy);
  };

  /**
   * Handles sorting the array
   */
  const stableSort: (
    array: TableRowData[],
    comparator: (order: SortOrder, orderBy: string) => any
  ) => TableRowData[] = (array, comparator) => {
    /**
     * Formats the array
     */
    const formattedArray = array.map((el, index) => [el, index]);

    /**
     * Sorts the array
     */
    formattedArray.sort((a: TableRowData, b: TableRowData) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });

    /**
     * Returns the newly sorted array
     */
    return formattedArray.map((el: TableRowData) => el[0]);
  };

  /**
   * Handles getting the table data
   * Also makes sure to sort it
   */
  const prepareTableCollection = () => {
    if (columns && columns.length > 0 && collection && collection.length > 0) {
      return stableSort(collection, getComparator(order, orderBy));
    }
    return [];
  };

  /**
   * Handles updating the sorting related states
   */
  const handleSort = (property: TableColumnData["rowKey"]) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    if (property) setOrderBy(property);
  };

  const renderTableHead = () => {
    return tableHeaders.map((column) => {
      const { label, rowKey, sort } = column;
      const active = orderBy === rowKey;
      const sortDirection = active ? order : false;
      const isSortCell = sort && plugins?.includes("withSort");
      const direction = active ? order : "asc";
      const handleClick = () => {
        if (!isSortCell) return;
        handleSort(rowKey);
      };

      /**
       * Defines the sorting cell
       */
      const sortingCell = (
        <TableSortLabel
          active={active}
          IconComponent={KeyboardArrowDownIcon}
          direction={direction}
          onClick={handleClick}
        >
          {label}
        </TableSortLabel>
      );

      return (
        <TableCell
          classes={tableCellClasses}
          key={shortid.generate()}
          align={column.align}
          sortDirection={sortDirection}
          onClick={handleClick}
        >
          {isSortCell ? sortingCell : column.label}
        </TableCell>
      );
    });
  };

  const getValue = (
    isCounter: boolean,
    column: TableColumnData,
    row: TableRowData,
    key: string,
    index: number
  ) => {
    const { displayCount } = column;

    if (isCounter && displayCount) return displayCount(index);

    if (key) {
      if (row[key] instanceof Date) {
        const defaultDateFormat = "dd-MM-yyyy HH:mm";
        return formatDate(new Date(row[key]), dateFormat || defaultDateFormat);
      }

      return row[key];
    }

    return null;
  };

  const renderTableBody = () => {
    const preparedCollection = prepareTableCollection();

    if (loading) {
      return (
        <TableRow classes={tableRowClasses}>
          <TableCell
            align="center"
            colSpan={tableHeaders.length}
            classes={tableCellClasses}
          >
            {loadingComponent ? (
              loadingComponent
            ) : (
              <CircularProgress color="secondary" />
            )}
          </TableCell>
        </TableRow>
      );
    }

    if (searchFailed || (!loading && preparedCollection.length < 1)) {
      return (
        <TableRow classes={tableRowClasses}>
          <TableCell
            align="center"
            colSpan={tableHeaders.length}
            classes={tableCellClasses}
          >
            {notFoundComponent ? notFoundComponent : <h1> No data found </h1>}
          </TableCell>
        </TableRow>
      );
    }

    return preparedCollection.map((row, index) => {
      return (
        <TableRow key={shortid.generate()} classes={tableRowClasses}>
          {tableHeaders.map((column) => {
            const { rowKey, isCounter, align } = column;
            const key = rowKey ? rowKey : "";

            const displayValue =
              getValue(isCounter || false, column, row, key, index) || row[key];

            return (
              <TableCell
                key={shortid.generate()}
                align={align}
                classes={tableCellClasses}
              >
                {displayValue}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  };

  useEffect(() => {
    if (rows.length > 0) setCollection(rows);
  }, [rows]);

  useEffect(() => {
    if (columns.length > 0) {
      const tableHeaders = [...columns];

      if (plugins?.includes("withCount")) {
        tableHeaders.unshift({
          isCounter: true,
          label: "#",
          rowKey: null,
          skipKey: true,
          align: "center",
          searchField: false,
          displayCount: (index: number) => index + 1,
        });
      }

      setTableHeaders(tableHeaders);
    }
  }, [columns]);

  const handleSearch = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearch(event.target.value);
  };

  /**
   * Handles formatting the value, to normalize it for search comparisons
   * @param {String|Number|Boolean} value
   */
  const formatValue = (value: string, dict: { [key: string]: string }) => {
    const excessWhitespace = /^\s+|\s+$|\s+(?=\s)/g;
    if (!value) return "";
    return value
      .toString()
      .toLowerCase()
      .replace(excessWhitespace, "")
      .replace(/[^\w ]/g, function (char) {
        return dict[char] || char;
      });
  };

  /**
   * Handles getting the first match during search
   */
  const getFirstMatch = (row: TableRowData) => {
    let matchFound = false;
    tableHeaders.forEach((header) => {
      const { searchField, rowKey } = header;
      if (matchFound) return;

      if (searchField && rowKey) {
        let dict = { â: "a", ă: "a", ș: "s", î: "i", ț: "t" };
        const value = getValue(false, header, row, rowKey, 0);
        matchFound = formatValue(value, dict).includes(search.toLowerCase());
      }
    });

    return matchFound;
  };

  /**
   * Handles triggering a search
   */
  useEffect(() => {
    if (searchLoading) {
      setTimeout(() => {
        setSearchReady(true);
      }, 200);
    }
  }, [searchLoading]);

  /**
   * Handles the dynamic search
   */
  useEffect(() => {
    if (searchReady) {
      const updatedCollection = collection.filter((row) => getFirstMatch(row));

      if (updatedCollection.length < 1 && !searchFailed) setSearchFailed(true);
      if (updatedCollection.length > 0 && searchFailed) setSearchFailed(false);

      setCollection(updatedCollection);
      setSearchReady(false);
      setTimeout(() => {
        setSearchLoading(false);
      }, 400);
    }
    // eslint-disable-next-line
  }, [searchReady]);

  /**
   * Handles updating the loading state or resetting the data
   */
  useEffect(() => {
    if (search.length >= 2) setSearchLoading(true);
    if (search.length < 2) {
      setCollection(rows);
      setSearchReady(false);
      setSearchFailed(false);
      setSearchLoading(false);
    }
    // eslint-disable-next-line
  }, [search]);

  return (
    <Paper className={baseClasses.paper} {...paperProps}>
      <Toolbar {...toolbarProps}>
        <div className={baseClasses.actions}>
          <InpuText
            value={search}
            name="search"
            placeholder={t("searchTable")}
            debounce={searchReady}
            onChange={handleSearch}
            autoFocus={false}
          />
          {searchLoading && (
            <div className={baseClasses.loader}>
              <CircularProgress size={25} color="secondary" />
            </div>
          )}
        </div>
      </Toolbar>
      <TableContainer {...tableContainerProps}>
        <Table
          {...tableProps}
          className={clsx(baseClasses.table, classes.table)}
        >
          <TableHead {...tableHeadProps}>
            <TableRow classes={tableRowClasses}>{renderTableHead()}</TableRow>
          </TableHead>
          <TableBody {...tableBodyProps}>{renderTableBody()}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DynamicTable;
