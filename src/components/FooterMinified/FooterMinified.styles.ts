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
    flex: "1",
    justifyContent: "flex-start",
    bottom: 5,
    position: "fixed",
    paddingLeft: 10,
    alignItems: "center",
  },
  fab: {
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
