/**
 * Modules Imports
 */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

/**
 * Imports assets
 */
import logo from "./logo.png";

/**
 * Imports Material UI Components
 */
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Switch from "@material-ui/core/Switch";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import i18n from "../../i18n";

/**
 * Imports Hooks
 */
import { useTheme, useLanguage } from "../../hooks";

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

  /**
   * Gets the history object
   */
  const history = useHistory();

  /**
   * Gets the active theme and theme changer
   */
  const { activeTheme, changeTheme } = useTheme();

  /**
   * Gets the active language and language changer
   */
  const { activeLanguage, changeLanguage } = useLanguage();

  /**
   * Handles Routing to Home Page
   */
  const goToHome = () => history.push("/");

  /**
   * Handles changing the theme
   */
  const handleThemeChange = () => {
    changeTheme(activeTheme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  /**
   * Handles changing the language
   */
  const handleLanguageChange = () => {
    if (activeLanguage === "en_en") {
      changeLanguage("en_ro");
    } else {
      changeLanguage("en_en");
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar>
          <img className={classes.logo} src={logo} alt="logo" />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className={classes.actions}>
            <div className={classes.themeFix}>
              <Brightness7Icon />
              <Switch
                checked={activeTheme === "dark-theme"}
                onChange={handleThemeChange}
                color="secondary"
                name="checkedB"
                className={classes.switchFix}
                classes={{
                  colorPrimary: classes.switchPrimary,
                }}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <Brightness4Icon />
            </div>

            <div className={classes.themeFix}>
              <img
                className={classes.flag}
                src="https://www.countryflags.com/wp-content/uploads/romania-flag-png-xl.png"
                alt="ro"
              />
              <div>
                <Switch
                  checked={activeLanguage === "en_en"}
                  onChange={handleLanguageChange}
                  color="secondary"
                  name="checkedB"
                  inputProps={{ "aria-label": "primary checkbox" }}
                  classes={{
                    colorPrimary: classes.switchPrimary,
                    track: classes.switchTrack,
                  }}
                />
              </div>
              <img
                className={classes.flag}
                src="https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png"
                alt="uk"
              />
            </div>
          </div>

          <div className={classes.menuItems}>
            <Button onClick={goToHome} color="inherit">
              Home
            </Button>
            <Button color="inherit">News</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">{t("signIn")}</Button>
            <Button color="inherit">Sign Up</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
