/**
 * Modules Imports
 */
import React, { useState } from "react";
//import { useTranslation } from "react-i18next";

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

import i18n from "../../i18n";

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

/**
 * Imports the component styles
 */
import { useStyles } from "./Navbar.styles";

/**
 * Displays the component
 */
const Navbar: React.FC = () => {
  /**
   * Handles the translations
   */
  //const { t } = useTranslation();

  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  if (isMobile || isTablet) {
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.nav}>
          <Toolbar>
            <NavbarMenu onClick={openDrawer} />
            <Logo />
          </Toolbar>
        </AppBar>

        <Drawer
          open={open}
          onClose={closeDrawer}
          classes={{
            paper: classes.paper,
          }}
        >
          <div className={classes.list} role="presentation">
            <List>
              <ListItem>
                <NavbarSearchForm withExpandAnimation={false} />
              </ListItem>
            </List>
            <Divider />
            <NavbarUserMenuMobile close={closeDrawer} />
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
          </div>
        </Drawer>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar>
          <Logo />
          <NavbarSearchForm withExpandAnimation />
          <div className={classes.actions}>
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
          <NavbarUserMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
