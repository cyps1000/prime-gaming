import { useState } from "react";
/**
 * Modules Imports
 */
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

/**
 * Componnents Imports
 */
import RegisterBlock from "../RegisterBlock";

/**
 * Imports Material UI Components
 */
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

/**
 * Imports the component styles
 */
import { useStyles } from "./NavbarUserMenu.styles";

/**
 * Displays the component
 */
const NavbarUserMenu: React.FC = (props) => {
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
   * Initializes the sign up modal state
   */
  const [signUpModal, setSignUpModal] = useState(false);

  /**
   * Handles opening the sign up modal
   */
  const openSignUpModal = () => setSignUpModal(true);

  /**
   * Handles closing the sign up modal
   */
  const closeSignUpModal = () => setSignUpModal(false);

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
      <Button>{t("signIn")}</Button>
      <Button onClick={openSignUpModal}>{t("signUp")}</Button>
      <Dialog open={signUpModal} onClose={closeSignUpModal}>
        <RegisterBlock onClose={closeSignUpModal} />
      </Dialog>
    </div>
  );
};

export default NavbarUserMenu;
