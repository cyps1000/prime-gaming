/**
 * Assets Imports
 */
import BannerImage from "./banner.png";

/**
 * Imports the component styles
 */
import { useStyles } from "./Banner.styles";

/**
 * Displays the component
 */
const Banner: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles({ banner: BannerImage });

  return <div className={classes.root}></div>;
};

export default Banner;
