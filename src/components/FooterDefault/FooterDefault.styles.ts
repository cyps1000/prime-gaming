/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, fade } from "@material-ui/core/styles";

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
  button: {
    paddingLeft: 5,
  },
}));

export { useStyles };
