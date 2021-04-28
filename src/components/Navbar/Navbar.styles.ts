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
  },
  actions: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
    marginRight: "2rem",
  },
}));

export { useStyles };
