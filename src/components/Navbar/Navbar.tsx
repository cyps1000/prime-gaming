/**
 * Modules Imports
 */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

/**
 * Imports Material UI Components
 */
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import i18n from "../../i18n";

/**
 * Components Imports
 */
import Logo from "../Logo";
import NavbarSearchForm from "../NavbarSearchForm";
import ThemeSwitcher from "../ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher";
import NavbarUserMenu from "../NavbarUserMenu";

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
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar>
          <Logo />
          <NavbarSearchForm />
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
