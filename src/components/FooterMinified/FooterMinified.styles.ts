/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: "1",
    justifyContent: "flex-start",
    bottom: 10,
    position: "fixed",
    paddingLeft: 10,
    alignItems: "center",
  },
  fab: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: "#000000b8",
    },
  },
}));

export { useStyles };
