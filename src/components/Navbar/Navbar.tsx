/**
 * Modules Imports
 */
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
        u
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
          <NavbarUserMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
