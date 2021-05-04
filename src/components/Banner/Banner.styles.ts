/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme) => ({
  root: {},
  img: {
    height: "42rem",
    width: "118.96rem",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "no-repeat center center fixed",
    [theme.breakpoints.down("sm")]: {
      height: "inherit",
      width: "-webkit-fill-available",
    },
    [theme.breakpoints.down("md")]: {
      width: "-webkit-fill-available",
    },
  },
}));

export { useStyles };
