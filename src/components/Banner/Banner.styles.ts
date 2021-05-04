/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * Defines the root class interface
 */
interface UseStylesProps {
  banner: string;
}

/**
 * Styles the component
 */
const useStyles = makeStyles((theme) => ({
  root: (props: UseStylesProps) => {
    const { banner } = props;

    return {
      backgroundImage: `url(${banner})`,
      width: "100%",
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 100%",
      backgroundSize: "cover",
      position: "relative",
    };
  },
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
