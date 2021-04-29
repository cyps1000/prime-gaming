/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, fade } from "@material-ui/core/styles";

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
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.15),
      },
      margin: "0 10px",
      fontSize: 16,
      color: theme.palette.secondary.main,
      fontWeight: 800,
      textTransform: "initial",
    },
  },
}));

export { useStyles };
