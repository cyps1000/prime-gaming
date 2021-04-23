/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Imports the component styles
 */
import { useStyles } from "./Header.styles";

/**
 * Defines the props interface
 */
export interface HeaderProps {
  text: string;
}

/**
 * Displays the component
 */
const Header: React.FC<HeaderProps> = (props) => {
  const { text } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return <div className={classes.root}>{t(text)}</div>;
};

export default Header;
