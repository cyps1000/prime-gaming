/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Material UI Imports
 */
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Fab from "@material-ui/core/Fab";

/**
 * Imports the component styles
 */
import { useStyles } from "./FooterMinified.styles";

/**
 * Defines the props interface
 */
export interface FooterMinifiedProps {
  expandFooter: () => void;
}

/**
 * Displays the component
 */
const FooterMinified: React.FC<FooterMinifiedProps> = (props) => {
  const { expandFooter } = props;
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="footer-minified">
      <Fab
        className={classes.fab}
        data-testid="expand-button"
        onClick={expandFooter}
      >
        <ArrowForwardIcon />
      </Fab>
    </div>
  );
};

export default FooterMinified;
