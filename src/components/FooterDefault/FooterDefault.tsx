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
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import Fade from "@material-ui/core/Fade";

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
  minifyFooter: () => void;
}

/**
 * Displays the component
 */
const FooterDefault: React.FC<FooterDefaultProps> = (props) => {
  const { minifyFooter } = props;

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
  const [show, setShow] = useState(true);

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

  const handleMinify = () => setTriggerMinify(true);

  useEffect(() => {
    if (triggerMinify) {
      setAppear(false);
      setTimeout(() => {
        minifyFooter();
      }, 400);
    }
  }, [triggerMinify]);

  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, 50);
  }, []);

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarMinified]: triggerMinify,
        [classes.appBarEnter]: appear,
      })}
    >
      <Toolbar className={classes.toolbar}>
        <Grid container>
          <Grid item xs={3}>
            <Typography className={classes.copyright}>
              © 2021 Prime Gaming
            </Typography>
          </Grid>
          <Grid item container xs={6} justify="center">
            <FooterSocials />
          </Grid>
          <Grid item container xs={3} justify="flex-end" alignItems="center">
            <IconButton onClick={handleMinify} className={classes.iconButton}>
              <ArrowBackOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
        {show && (
          <Fab size="small" className={classes.fabButton} onClick={expandList}>
            <ExpandLessIcon />
          </Fab>
        )}

        <div className={classes.listWrapper}>
          <List
            component="nav"
            aria-label="secondary mailbox folders"
            className={clsx(classes.list, {
              [classes.listAppear]: expanded,
            })}
          >
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Spam" />
            </ListItem>
            <Fab
              size="small"
              className={classes.fabButton}
              onClick={shrinkList}
            >
              <ExpandMoreIcon />
            </Fab>
          </List>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default FooterDefault;
