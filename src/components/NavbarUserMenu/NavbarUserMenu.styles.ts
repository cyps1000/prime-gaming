/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme) => ({
  menuItems: {
    display: "flex",
    alignItems: "center",
    flex: 3,
    justifyContent: "flex-end",
    paddingRight: "2.5rem",
    "& button": {
      margin: "0 10px",
      fontSize: 16,
      color: theme.palette.secondary.main,
      fontWeight: 800,
      textTransform: "initial",
    },
  },
}));

export { useStyles };
