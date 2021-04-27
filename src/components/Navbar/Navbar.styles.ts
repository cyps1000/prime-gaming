/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme, fade } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    background: theme.palette.primary.main,
  },
  flag: {
    width: 20,
  },
  push: {
    marginLeft: "auto",
  },
  themeFix: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
  },
  switchFix: {
    paddingLeft: 10,
  },
  logo: {
    maxWidth: 150,
    marginTop: -5,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 15,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "2rem",
      width: "auto",
      minWidth: 350,
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#FFFFFF",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  switchPrimary: {},
  switchTrack: {
    backgroundColor: theme.palette.common.white,
  },
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
    },
  },
  actions: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
    marginRight: "2rem",
  },
}));

export { useStyles };
