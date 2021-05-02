import { useState, useEffect } from "react";

/**
 * External Imports
 */
import clsx from "clsx";

/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Material UI Imports
 */
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

/**
 * Internal Imports
 */
import FooterSocials from "../FooterSocials";

/**
 * Imports the component styles
 */
import { useStyles } from "./FooterDefault.styles";

/**
 * Defines the props interface
 */
export interface FooterDefaultProps {
  copyrightText?: string;
  minifyFooter: () => void;
}

/**
 * Defines the default props
 */
const defaultProps: FooterDefaultProps = {
  copyrightText: "© 2021 Prime Gaming",
  minifyFooter: () => {},
};

/**
 * Displays the component
 */
const FooterDefault: React.FC<FooterDefaultProps> = (props) => {
  const { minifyFooter, copyrightText } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Init the Expanded state
   */
  const [expanded, setExpanded] = useState(false);

  /**
   * Init the trigger minify flag
   */
  const [triggerMinify, setTriggerMinify] = useState(false);

  /**
   * Init the appear flag
   */
  const [appear, setAppear] = useState(false);

  /**
   * Init the timer
   */
  const [show, setShow] = useState(false);

  /**
   * Defines the appbar classes
   */
  const appbarClasses = clsx(classes.appBar, {
    [classes.appBarMinified]: triggerMinify,
    [classes.appBarEnter]: appear,
  });

  /**
   * Defines the list classes
   */
  const listClasses = clsx(classes.list, {
    [classes.listAppear]: expanded,
  });

  /**
   * Handles expanding the list
   */
  const expandList = () => {
    setShow(false);
    setExpanded(true);
  };

  /**
   * Handles shrinking the list
   */
  const shrinkList = () => {
    setExpanded(false);
    setTimeout(() => {
      setShow(true);
    }, 250);
  };

  /**
   * Handles triggering the minify state
   */
  const handleMinify = () => setTriggerMinify(true);

  /**
   * Handles rendering the expand button
   */
  const renderExpandButton = () => {
    if (!show) return null;
    return (
      <Fab
        data-testid="expand-list-button"
        size="small"
        className={classes.fabButton}
        onClick={expandList}
      >
        <ExpandLessIcon />
      </Fab>
    );
  };

  /**
   * Handles minifying the footer
   * and triggering the appbar minify animation
   */
  useEffect(() => {
    if (triggerMinify) {
      setAppear(false);
      let timer = setTimeout(() => {
        minifyFooter();
      }, 400);

      /**
       * Clear timeout when unmounting
       */
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line
  }, [triggerMinify]);

  /**
   * Handles expanding the footer
   * and triggering the appbar appear animation
   */
  useEffect(() => {
    setShow(true);
    let timer = setTimeout(() => {
      setAppear(true);
    }, 50);

    /**
     * Clear timeout when unmounting
     */
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppBar
      data-testid="footer-default"
      position="fixed"
      className={appbarClasses}
    >
      <Toolbar className={classes.toolbar}>
        <Grid container>
          <Grid item xs={3}>
            <Typography className={classes.copyright}>
              {copyrightText}
            </Typography>
          </Grid>
          <Grid item container xs={6} justify="center">
            <FooterSocials />
          </Grid>
          <Grid item container xs={3} justify="flex-end" alignItems="center">
            <IconButton
              data-testid="minify-button"
              onClick={handleMinify}
              className={classes.iconButton}
            >
              <ArrowBackOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
        {renderExpandButton()}
        <Box className={classes.listWrapper}>
          <List component="nav" className={listClasses}>
            <ListItem button>
              <ListItemText primary={t("termsOfService")} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={t("privacyPolicy")} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={t("cookiePolicy")} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={t("contactUs")} />
            </ListItem>
            <Fab
              size="small"
              className={classes.fabButton}
              onClick={shrinkList}
              data-testid="shrink-list-button"
            >
              <ExpandMoreIcon />
            </Fab>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

FooterDefault.defaultProps = defaultProps;
export default FooterDefault;
