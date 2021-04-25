/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme) => ({
  routes: {
    padding: 0,
    maxWidth: "none",
    height: "100%",
  },
}));

export { useStyles };
