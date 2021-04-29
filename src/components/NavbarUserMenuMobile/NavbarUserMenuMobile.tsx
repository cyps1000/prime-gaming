/**
 * Modules Imports
 */
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

/**
 * Imports Material UI Components
 */
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

/**
 * Imports the component styles
 */
import { useStyles } from "./NavbarUserMenuMobile.styles";

/**
 * Defines the props interface
 */
export interface NavbarUserMenuMobileProps {
  text?: string;
  close: () => void;
}

/**
 * Displays the component
 */
const NavbarUserMenuMobile: React.FC<NavbarUserMenuMobileProps> = (props) => {
  const { text, close } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Gets the history object
   */
  const history = useHistory();

  /**
   * Handles Routing to Home Page
   */
  const goToHome = () => {
    history.push("/");
    close();
  };

  return (
    <List className={classes.listItem}>
      <ListItem button>
        <ListItemText onClick={goToHome} primary={t("home")} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={t("news")} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={t("about")} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={t("contact")} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={t("signIn")} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={t("signUp")} />
      </ListItem>
    </List>
  );
};

export default NavbarUserMenuMobile;
