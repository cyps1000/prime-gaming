/**
 * Imports the component styles
 */
import { useStyles } from "./DynamicTable.styles";

/**
 * Imports Material UI components
 */
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

/**
 * Defines the props interface
 */
export interface DynamicTableProps {
  config: {
    fields: {
      label: string;
      align?: TableCellProps["align"];
      key: string;
    }[];
    collection: {}[];
    orderBy: string;
    order: "asc" | "desc";
  };
}

/**
 * Displays the component
 */
const DynamicTable: React.FC<DynamicTableProps> = (props) => {
  const { config } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   *
   */
  const renderTableHead = () => {
    const { fields } = config;
    return fields.map((field) => {
      return (
        <TableCell key={field.label} align={field.align}>
          {field.label}
        </TableCell>
      );
    });
  };

  const renderTableBody = () => {
    const { collection, fields } = config;

    return collection.map((item) => {
      return (
        <TableRow>
          {fields.map((field) => {
            //@ts-ignore
            return <TableCell>{item[field.key]}</TableCell>;
          })}
        </TableRow>
      );
    });
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>{renderTableHead()}</TableRow>
        </TableHead>
        <TableBody>{renderTableBody()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
