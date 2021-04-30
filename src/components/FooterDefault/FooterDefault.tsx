import { useState } from "react";

/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Material UI Imports
 */
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

/**
 * Internal Imports
 */
import Logo from "../Logo";
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
   * Handles expanding the list
   */
  const expandList = () => setExpanded(true);

  /**
   * Handles shrinking the list
   */
  const shrinkList = () => setExpanded(false);

  /**
   *
   */
  const renderExpansionIcon = () => {
    const onClick = expanded ? shrinkList : expandList;
    const icon = expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />;

    const className = clsx(classes.fabButton, {
      [classes.expandedFab]: expanded,
    });
    return (
      <Fab
        size="medium"
        aria-label="Hide"
        className={className}
        onClick={onClick}
      >
        {icon}
      </Fab>
    );
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Logo className={classes.logo} />
        {renderExpansionIcon()}
        {expanded && (
          <div className={classes.listWrapper}>
            <List
              component="nav"
              aria-label="secondary mailbox folders"
              className={classes.list}
            >
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </div>
        )}
        <FooterSocials />
        <Button variant="contained" onClick={minifyFooter}>
          <ArrowBackIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default FooterDefault;
