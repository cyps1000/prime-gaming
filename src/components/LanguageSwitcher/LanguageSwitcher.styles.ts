/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme) => ({
  flag: {
    width: 23,
    height: 19,
  },
  container: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
  },
  switchFix: {
    paddingLeft: 10,
  },
  switchPrimary: {},
  switchTrack: {
    backgroundColor: theme.palette.common.white,
  },
}));

export { useStyles };
