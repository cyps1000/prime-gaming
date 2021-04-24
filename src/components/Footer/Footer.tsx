/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Imports the component styles
 */
import { useStyles } from "./Footer.styles";

/**
 * Defines the props interface
 */
export interface FooterProps {
  text?: string;
}

/**
 * Displays the component
 */
const Footer: React.FC<FooterProps> = (props) => {
  const { text } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <div className={classes.root}>{t(text ? text : "Footer")}</div>
  );
};

export default Footer;
