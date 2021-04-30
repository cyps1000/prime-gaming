/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Material UI Imports
 */
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

/**
 * Internal Imports
 */
import Logo from "../Logo";
import FooterSocials from "../FooterSocials";

/**
 * Imports the component styles
 */
import { useStyles } from "./FooterDefault.styles";

/**
 * Defines the props interface
 */
export interface FooterDefaultProps {
  text?: string;
}

/**
 * Displays the component
 */
const FooterDefault: React.FC<FooterDefaultProps> = (props) => {
  const { text } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Logo className={classes.logo} />
          <Fab size="medium" aria-label="Hide" className={classes.fabButton}>
            <ExpandLessIcon />
          </Fab>
          <FooterSocials />
          <Button variant="contained">
            <ArrowBackIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default FooterDefault;
