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
    color: theme.palette.secondary.main,
  },
  avatar: {
    marginTop: "0.1rem",
    marginBottom: "1rem",
    backgroundColor: "#ee82ee", // Violet
  },
  form: {
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
    color: "#fff",
    backgroundColor: "#ee82ee",
    "&:hover": {
      backgroundColor: "#ee82ee73",
    },
  },
  inputs: {
    color: theme.palette.secondary.main,
    ":-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px white inset",
      backgroundColor: "red !important",
    },
  },
  inputOutlined: {
    borderColor: theme.palette.secondary.main,
    "&:focus": {
      borderColor: theme.palette.secondary.main,
    },
  },
  inputRoot: {
    ":-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px white inset",
      backgroundColor: "red !important",
    },
    "&$inputFocused $inputOutlined": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover $inputOutlined": {
      borderColor: theme.palette.secondary.main,
    },
  },
  inputFocused: {},
  rootLabel: {
    color: theme.palette.secondary.main,
    "&.Mui-focused": {
      color: theme.palette.secondary.main,
    },
  },
  modal: {
    backgroundColor: theme.palette.primary.main,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "flex-end",
    borderBottom: "none",
  },
  modalIcon: {
    color: "#ee82ee",
  },
}));

export { useStyles };
