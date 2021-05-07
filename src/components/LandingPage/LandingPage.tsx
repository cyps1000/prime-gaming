/**
 * Imports the component styles
 */
import { useStyles } from "./LandingPage.styles";

/**
 * Component Imports
 */
import Banner from "../Banner";

/**
 * Displays the component
 */
const LandingPage: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Banner />
    </div>
  );
};

export default LandingPage;
