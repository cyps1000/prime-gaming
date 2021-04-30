/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, lighten } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background: theme.palette.primary.main,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
    color: theme.palette.secondary.main,
    background: theme.palette.primary.main,
  },
  logo: {
    marginTop: 0,
    display: "flex",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
  },
  listWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    top: -112,
    color: "#000",
  },
  list: {
    background: lighten(theme.palette.primary.main, 0.05),
    color: "#fff",
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
  },
  expandedFab: {
    top: -140,
  },
}));

export { useStyles };
