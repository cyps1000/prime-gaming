/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  table: {},
  actions: {
    display: "flex",
    alignItems: "center",
  },
  loader: {
    display: "flex",
    alignItems: "center",
    marginLeft: "1rem",
  },
  field: {
    marginBottom: 0,
  },
  icon: {
    color: theme.palette.primary.main,
  },
  flex: {
    display: "flex",
  },
  addBtn: {
    minWidth: 0,
    margin: 0,
    padding: "0.25rem",
    borderRadius: 3,
    "& svg": {
      margin: 0,
    },
  },
  undoBtn: {
    minWidth: 0,
    margin: 0,
    marginLeft: "0.25rem",
    padding: "0.25rem",
    borderRadius: 3,
    "& svg": {
      margin: 0,
    },
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: "none",
    "&:hover": {
      background: theme.palette.secondary.main,
      boxShadow: "none",
    },
  },
  stats: {
    display: "flex",
    justifyContent: "flex-end",
    color: "#4e4e4e",
    fontSize: "0.8rem",
    fontWeight: 800,
    fontFamily: theme.typography.fontFamily,
  },
  paper: {
    width: "100%",
    boxShadow: "none",
  },
}));

export { useStyles };
