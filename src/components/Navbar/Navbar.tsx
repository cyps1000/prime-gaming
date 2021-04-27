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

/**
 * Imports the component styles
 */
import { useStyles } from "./Navbar.styles";

/**
 * Defines the props interface
 */
export interface NavbarProps {
  text?: string;
}

/**
 * Displays the component
 */
const Navbar: React.FC<NavbarProps> = (props) => {
  const { text } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Initializes the Switch State
   */
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  /**
   * Handles changing the Switch
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar>
          <img className={classes.logo} src={logo} alt="logo" />
          <Button onClick={goToHome} color="inherit">
            Home
          </Button>
          <Button color="inherit">News</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>

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

          <div className={classes.themeFix}>
            <Brightness4Icon />
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              color="primary"
              name="checkedB"
              className={classes.switchFix}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Brightness7Icon />
          </div>

          <div className={classes.themeFix}>
            <img
              className={classes.flag}
              src="https://www.countryflags.com/wp-content/uploads/romania-flag-png-xl.png"
              alt="ro"
            />
            <div>
              <Switch
                checked={state.checkedB}
                onChange={handleChange}
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
            <img
              className={classes.flag}
              src="https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png"
              alt="uk"
            />
          </div>

          <Button className={classes.push} color="inherit">
            Sign In
          </Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
