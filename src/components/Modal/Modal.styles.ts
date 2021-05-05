/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme) => ({
  paperWidthSm: {
    maxWidth: 700,
  },
  paperWidthMd: {
    maxWidth: 800,
  },
  paperWidthXl: {
    maxWidth: 1500,
  },
}));

export { useStyles };
