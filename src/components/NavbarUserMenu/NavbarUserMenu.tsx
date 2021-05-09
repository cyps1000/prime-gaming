import { useHistory } from "react-router-dom";
/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

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
interface NavbarUserMenuProps {
  openSignUpModal: () => void;
  openSignInModal: () => void;
}

/**
 * Displays the component
 */
const NavbarUserMenu: React.FC<NavbarUserMenuProps> = (props) => {
  const { openSignUpModal, openSignInModal } = props;

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
  };

  /**
   * Defines the routing functions
   */
  const goToHome = () => routeTo("/");
  const goToNews = () => routeTo("/news");
  const goToAbout = () => routeTo("/about");
  const goToContact = () => routeTo("/contact");

  return (
    <div className={classes.menuItems}>
      <Button onClick={goToHome}>{t("home")}</Button>
      <Button onClick={goToNews}>{t("news")}</Button>
      <Button onClick={goToAbout}>{t("about")}</Button>
      <Button onClick={goToContact}>{t("contact")}</Button>
      <Button onClick={openSignInModal}>{t("signIn")}</Button>
      <Button onClick={openSignUpModal}>{t("signUp")}</Button>
    </div>
  );
};

export default NavbarUserMenu;
