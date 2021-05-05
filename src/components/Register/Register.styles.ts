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
    paddingTop: 90,
  },
  modal: {
    // backgroundColor: theme.palette.primary.main,
  },
}));

export { useStyles };
