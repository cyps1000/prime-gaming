/**
 * Modules Imports
 */
import React, { useState } from "react";

/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Imports Material UI Components
 */
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";

/**
 * Components Imports
 */
import Logo from "../Logo";
import NavbarSearchForm from "../NavbarSearchForm";
import ThemeSwitcher from "../ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher";
import NavbarUserMenu from "../NavbarUserMenu";
import NavbarMenu from "../NavbarMenu";
import NavbarUserMenuMobile from "../NavbarUserMenuMobile";
import NavbarMobileFooter from "../NavbarMobileFooter";
import FooterSocials from "../FooterSocials";
import RegisterBlock from "../RegisterBlock";
import LoginBlock from "../LoginBlock";
import Modal from "../Modal";
import ModalContent from "../ModalContent";

/**
 * Imports the component styles
 */
import { useStyles } from "./Navbar.styles";

interface ModalState {
  signUpModal: boolean;
  signInModal: boolean;
}

/**
 * Displays the component
 */
const Navbar: React.FC = () => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Initializes the Drawer state
   */
  const [open, setOpen] = useState(false);

  /**
   * Initializes the Modal state
   */
  const [modals, setModals] = useState({
    signUpModal: false,
    signInModal: false,
  } as ModalState);

  const openModal = (modalType: string) => {
    setModals((prevState) => {
      console.log("Previous State", prevState);
      return { ...prevState, [modalType]: true };
    });
  };

  /**
   * Handles opening the Sign In Modal
   */
  const openSignInModal = () => openModal("signInModal");

  /**
   * Handles opening the Sign Up Modal
   */
  const openSignUpModal = () => openModal("signUpModal");

  /**
   * Handles closing the Sign In and Sign Up Modal
   */
  const closeModal = () =>
    setModals({ signUpModal: false, signInModal: false });

  /**
   * Handles opening the Drawer
   */
  const openDrawer = () => setOpen(true);

  /**
   * Handles closing the Drawer
   */
  const closeDrawer = () => setOpen(false);

  if (isMobile || isTablet) {
    return (
      <div className={classes.root} data-testid="navbar-mobile">
        <AppBar position="fixed" className={classes.nav}>
          <Toolbar>
            <NavbarMenu onClick={openDrawer} />
            <Logo />
          </Toolbar>
        </AppBar>
        <Drawer
          data-testid="navbar-drawer-mobile"
          open={open}
          onClose={closeDrawer}
          classes={{
            paper: classes.paper,
          }}
        >
          <div className={classes.list} data-testid="navbar-list-container">
            <List>
              <ListItem>
                <NavbarSearchForm withExpandAnimation={false} />
              </ListItem>
            </List>
            <Divider />
            <NavbarUserMenuMobile
              close={closeDrawer}
              openSignUpModal={openSignUpModal}
              openSignInModal={openSignInModal}
            />
            <Divider />
            <List>
              <ListItem button>
                <div className={classes.actions}>
                  <ThemeSwitcher />
                </div>
              </ListItem>
              <ListItem button>
                <div className={classes.actions}>
                  <LanguageSwitcher />
                </div>
              </ListItem>
            </List>
            <Divider />
            <NavbarMobileFooter close={closeDrawer} />
            <Divider />
            <FooterSocials className={classes.menuIcon} />
            <Divider />
            <Typography className={classes.copyright}>
              © 2021 Prime Gaming
            </Typography>
          </div>
        </Drawer>
        <Dialog
          open={modals.signUpModal}
          onClose={closeModal}
          classes={{
            paper: classes.modal,
          }}
        >
          <RegisterBlock onClose={closeModal} />
        </Dialog>

        <Dialog
          open={modals.signInModal}
          onClose={closeModal}
          classes={{
            paper: classes.modal,
          }}
        >
          <LoginBlock onClose={closeModal} />
        </Dialog>
      </div>
    );
  }

  return (
    <div className={classes.root} data-testid="navbar">
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar>
          <Logo />
          <NavbarSearchForm withExpandAnimation />
          <div className={classes.actions}>
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
          <NavbarUserMenu
            openSignUpModal={openSignUpModal}
            openSignInModal={openSignInModal}
          />
        </Toolbar>
      </AppBar>
      <Modal
        scroll="paper"
        maxWidth="sm"
        open={modals.signUpModal}
        onClose={closeModal}
        classes={{
          paper: classes.modal,
        }}
      >
        <ModalContent>
          <RegisterBlock onClose={closeModal} />
        </ModalContent>
      </Modal>

      <Modal
        open={modals.signInModal}
        scroll="paper"
        maxWidth="sm"
        onClose={closeModal}
        classes={{
          paper: classes.modal,
        }}
      >
        <ModalContent>
          <LoginBlock onClose={closeModal} />
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Navbar;
