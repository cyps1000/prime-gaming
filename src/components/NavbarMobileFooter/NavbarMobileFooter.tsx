/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Imports Material UI Components
 */
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

/**
 * Imports the component styles
 */
import { useStyles } from "./NavbarMobileFooter.styles";

/**
 * Defines the props interface
 */
export interface NavbarMobileFooterProps {
  close: () => void;
}

/**
 * Displays the component
 */
const NavbarMobileFooter: React.FC<NavbarMobileFooterProps> = (props) => {
  const { close } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles closing the drawer when
   * and item is clicked.
   */
  const closeDrawer = () => {
    close();
  };

  return (
    <List className={classes.root}>
      <ListItem button onClick={closeDrawer}>
        <ListItemText primary={t("termsOfService")} />
      </ListItem>
      <ListItem button onClick={closeDrawer}>
        <ListItemText primary={t("privacyPolicy")} />
      </ListItem>
      <ListItem button onClick={closeDrawer}>
        <ListItemText primary={t("cookiePolicy")} />
      </ListItem>
      <ListItem button onClick={closeDrawer}>
        <ListItemText primary={t("contactUs")} />
      </ListItem>
    </List>
  );
};

export default NavbarMobileFooter;
