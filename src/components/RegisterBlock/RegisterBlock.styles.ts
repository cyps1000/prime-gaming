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
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#ee82ee",
  },
  form: {
    marginTop: theme.spacing(3),
  },
  formLabel: {
    color: "white",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export { useStyles };
