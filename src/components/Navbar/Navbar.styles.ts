/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    background: theme.palette.primary.main,
    boxShadow: "none",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
    marginRight: "2rem",
  },
  list: {
    width: 250,
  },
  paper: {
    background: theme.palette.primary.main,
  },
  menuIcon: {
    width: "1em",
  },
  copyright: {
    color: theme.palette.secondary.main,
    fontSize: 15,
    fontFamily: theme.typography.fontFamily,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  modal: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export { useStyles };
