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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    "& button": {
      borderRadius: 0,
    },
    "& button:hover": {
      background: theme.palette.secondary.main,
      "& $icon": {
        color: theme.palette.primary.main,
      },
    },
  },
  icon: {
    width: "2em",
    height: "1.2em",
    color: theme.palette.secondary.main,
    cursor: "pointer",
  },
}));

export { useStyles };
