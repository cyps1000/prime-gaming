/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Imports the component styles
 */
import { useStyles } from "./Navigation.styles";

/**
 * Defines the props interface
 */
export interface NavigationProps {
  text?: string;
}

/**
 * Displays the component
 */
const Navigation: React.FC<NavigationProps> = (props) => {
  const { text } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return <div className={classes.root}>{t(text ? text : "Navigation")}</div>;
};

export default Navigation;
