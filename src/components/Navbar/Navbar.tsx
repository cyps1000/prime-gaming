import React, { useState } from "react";

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
import RegisterModal from "../RegisterModal";
import LoginModal from "../LoginModal";
import ModalTitle from "../ModalTitle";

/**
 * Imports the component styles
 */
import { useStyles } from "./Navbar.styles";

/**
 * Defines the Modals' State interface
 */
interface ModalState {
  signUpModal: boolean;
  signInModal: boolean;
}

/**
 * Defines the props interface
 */
export interface NavbarProps {
  copyrightText?: string;
}

/**
 * Defines the default props
 */
const defaultProps: NavbarProps = {
  copyrightText: "© 2021 Prime Gaming",
};

/**
 * Displays the component
 */
const Navbar: React.FC<NavbarProps> = (props) => {
  const { copyrightText } = props;

  /**
   * Initializes the useTheme hook
   */
  const theme = useTheme();

  /**
   * Handles the tablet view
   */
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  /**
   * Handles the mobile view
   */
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

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

  /**
   * Handles opening the modal
   */
  const openModal = (modalType: string) => {
    setModals((prevState) => {
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

  /**
   * Handles the mobile/tablet view
   */
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
              {copyrightText}
            </Typography>
          </div>
        </Drawer>
        <RegisterModal onClose={closeModal} open={modals.signUpModal}>
          <ModalTitle
            onClick={closeModal}
            classes={{
              container: classes.titleContainer,
              icon: classes.modalIcon,
            }}
          />
        </RegisterModal>
        <LoginModal onClose={closeModal} open={modals.signInModal}>
          <ModalTitle
            onClick={closeModal}
            classes={{
              container: classes.titleContainer,
              icon: classes.modalIcon,
            }}
          />
        </LoginModal>
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
      <RegisterModal onClose={closeModal} open={modals.signUpModal} />
      <LoginModal onClose={closeModal} open={modals.signInModal} />
    </div>
  );
};

Navbar.defaultProps = defaultProps;
export default Navbar;
