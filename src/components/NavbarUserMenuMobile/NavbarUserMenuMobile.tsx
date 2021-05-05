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
  close: () => void;
}

/**
 * Displays the component
 */
const NavbarUserMenuMobile: React.FC<NavbarUserMenuMobileProps> = (props) => {
  const { close } = props;

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
   * Handles routing
   */
  const routeTo = (url: string) => {
    history.push(url);
    close();
  };

  /**
   * Defines the routing functions
   */
  const goToHome = () => routeTo("/");
  const goToNews = () => routeTo("/news");
  const goToAbout = () => routeTo("/about");
  const goToContact = () => routeTo("/contact");
  const goToRegister = () => routeTo("/register");

  return (
    <List className={classes.listItem}>
      <ListItem button onClick={goToHome}>
        <ListItemText primary={t("home")} />
      </ListItem>
      <ListItem button onClick={goToNews}>
        <ListItemText primary={t("news")} />
      </ListItem>
      <ListItem button onClick={goToAbout}>
        <ListItemText primary={t("about")} />
      </ListItem>
      <ListItem button onClick={goToContact}>
        <ListItemText primary={t("contact")} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={t("signIn")} />
      </ListItem>
      <ListItem button onClick={goToRegister}>
        <ListItemText primary={t("signUp")} />
      </ListItem>
    </List>
  );
};

export default NavbarUserMenuMobile;
