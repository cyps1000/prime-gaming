/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  table: {
    minWidth: 700,
    backgroundColor: "#343434",
  },
  articlesTitle: {
    fontSize: "3rem",

    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.6rem",
      },
    },
    color: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
  },
  operations: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  head: {
    backgroundColor: "#343434",
    color: theme.palette.secondary.main,
  },
  body: {
    fontSize: 14,
    color: theme.palette.secondary.main,
  },
  tableRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#121212c7",
    },
    backgroundColor: "#121212eb",
  },
  loader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiCircularProgress-root": {
      marginRight: "1rem",
    },
  },
  notFound: {
    padding: 15,
    fontSize: 20,
  },
  tableContainer: {
    maxHeight: 700,
  },
}));

export { useStyles };
