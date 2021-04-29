/**
 * Modules Imports
 */
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

/**
 * Imports Material UI Components
 */
import Button from "@material-ui/core/Button";

/**
 * Imports the component styles
 */
import { useStyles } from "./NavbarUserMenu.styles";

/**
 * Defines the props interface
 */
export interface NavbarUserMenuProps {
  text?: string;
}

/**
 * Displays the component
 */
const NavbarUserMenu: React.FC<NavbarUserMenuProps> = (props) => {
  const { text } = props;

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
  const goToHome = () => history.push("/");

  return (
    <div className={classes.menuItems}>
      <Button onClick={goToHome}>{t("home")}</Button>
      <Button>{t("news")}</Button>
      <Button>{t("about")}</Button>
      <Button>{t("contact")}</Button>
      <Button>{t("signIn")}</Button>
      <Button>{t("signUp")}</Button>
    </div>
  );
};

export default NavbarUserMenu;
