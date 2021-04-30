/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, fade } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme) => ({
  listItem: {
    color: theme.palette.secondary.main,
    cursor: "pointer",
  },
}));

export { useStyles };
