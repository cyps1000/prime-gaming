/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, lighten } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    boxShadow: "none",
    transition: theme.transitions.create("transform", { duration: 500 }),
    transform: "translateX(-100vw)",
  },
  appBarMinified: {
    transform: "translateX(-100vw)",
  },
  appBarEnter: {
    transform: "translateX(0vw)",
  },
  toolbar: {
    minHeight: 50,
    paddingLeft: 0,
    paddingRight: 0,
    background: theme.palette.primary.main,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -20,
    left: 0,
    right: 0,
    margin: "0 auto",
    color: theme.palette.secondary.main,
    background: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.main,
      background: theme.palette.secondary.main,
    },
  },
  logo: {
    marginTop: 0,
    display: "flex",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
  },
  listWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    top: -112,
    zIndex: -1,
  },
  list: {
    background: lighten(theme.palette.primary.main, 0.05),
    color: theme.palette.common.white,
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
    minHeight: 300,
    zIndex: -1,
    transition: theme.transitions.create("transform", { duration: 500 }),
    transform: "translateY(15vh)",
    position: "relative",
  },
  listAppear: {
    transform: "translateY(-10vh)",
  },
  expandedFab: {
    top: -130,
  },
  copyright: {
    color: theme.palette.common.white,
    fontSize: 15,
    fontFamily: theme.typography.fontFamily,
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: "2rem",
  },
  iconButton: {
    color: theme.palette.primary.main,
    background: theme.palette.secondary.main,
    borderRadius: 6,
    marginRight: "1rem",
    height: 40,
    width: 40,
    "& svg": {
      fontSize: "2rem",
    },
    "&:hover": {
      background: "#008cde",
      color: theme.palette.common.white,
    },
  },
}));

export { useStyles };
