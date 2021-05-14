import { useState, useEffect, memo, MouseEventHandler } from "react";

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
  config: {
    columns: TableColumnData[];
    rows: TableRowData[];
    plugins?: Plugin[];
    orderBy: string;
    order: SortOrder;
    dateFormat?: string;
    materialProps?: {
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
  const { config, classes } = props;
  const { rows, columns, materialProps = {}, plugins, dateFormat } = config;
  const {
    tableContainerProps,
    tableProps,
    tableHeadProps,
    tableBodyProps,
  } = materialProps;

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
          key={column.label}
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
    index: number
  ) => {
    const { displayCount, rowKey } = column;

    if (isCounter && displayCount) return displayCount(index);

    if (rowKey) {
      if (row[rowKey] instanceof Date) {
        const defaultDateFormat = "dd-MM-yyyy HH:mm";
        return formatDate(
          new Date(row[rowKey]),
          dateFormat || defaultDateFormat
        );
      }

      return row[rowKey];
    }

    return undefined;
  };

  const renderTableBody = () => {
    const preparedCollection = prepareTableCollection();

    return preparedCollection.map((row, index) => {
      return (
        <TableRow classes={tableRowClasses}>
          {tableHeaders.map((column) => {
            const { rowKey, isCounter, align } = column;
            const key = rowKey ? rowKey : 0;

            const displayValue =
              getValue(isCounter || false, column, row, index) || row[key];

            return (
              <TableCell align={align} classes={tableCellClasses}>
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

      console.log("tableHeaders:", tableHeaders);
      setTableHeaders(tableHeaders);
    }
  }, [columns]);

  return (
    <TableContainer {...tableContainerProps}>
      <Table {...tableProps} className={clsx(baseClasses.table, classes.table)}>
        <TableHead {...tableHeadProps}>
          <TableRow classes={tableRowClasses}>{renderTableHead()}</TableRow>
        </TableHead>
        <TableBody {...tableBodyProps}>{renderTableBody()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
