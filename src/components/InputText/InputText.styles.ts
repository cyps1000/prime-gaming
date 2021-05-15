/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  input: {
    color: "#47bffb",
    borderRadius: 4,
    border: "1px solid #47bffb",
  },
  inputBase: {
    lineHeight: "normal",
    height: "auto",
    padding: "11px 14px",
    "&:hover": {
      borderColor: "#47bffb",
    },
    "&:focus": {
      borderColor: "#47bffb",
    },
  },
  inputBaseError: {
    borderColor: theme.palette.error.main,
    "&:hover": {
      borderColor: theme.palette.error.main,
    },
    "&:focus": {
      borderColor: theme.palette.error.main,
    },
  },
  inputRoot: {
    "& $inputOutlined": {
      display: "none",
    },
    "&$inputFocused $inputOutlined": {
      outline: 0,
      borderWidth: 1,
    },
  },
  inputFocused: {
    "& $inputOutlined": {
      borderWidth: 1,
    },
  },
  inputOutlined: {
    borderWidth: 1,
    borderColor: "transparent",
    display: "none",
  },
  error: {
    borderColor: theme.palette.error.main,
  },
  errorMessage: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    background: "#ffefef",
    border: "solid 1px #ff6363",
    borderRadius: 3,
    margin: 0,
    marginTop: 5,
    padding: "0 14px",
    fontSize: 12,
    minHeight: 30,
    "&.Mui-error": {
      color: "#ff6363",
    },
  },
  inputRootDisabled: {
    background: "#fbfbfb",
  },
  adornedEnd: {
    paddingRight: 5,
  },
}));

export { useStyles };
