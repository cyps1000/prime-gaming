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
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  icon: {
    width: "2em",
    height: "1.2em",
    color: "#fcff3d",
  },
}));

export { useStyles };
