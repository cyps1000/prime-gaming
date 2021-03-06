/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
    "& svg": {
      color: "#ffffff",
    },
  },
  switch: {
    paddingLeft: 10,
  },
  switchPrimary: {},
  switchTrack: {
    backgroundColor: theme.palette.common.white,
  },
}));

export { useStyles };
