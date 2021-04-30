import { useState } from "react";

/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Imports Components
 */
import FooterDefault from "../FooterDefault";
import FooterMinified from "../FooterMinified";

/**
 * Imports the component styles
 */
import { useStyles } from "./Footer.styles";

/**
 * Displays the component
 */
const Footer: React.FC = (props) => {
  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Init the Footer state
   */
  const [minified, setMinified] = useState(false);

  /**
   * Handles minifying the footer
   */
  const minifyFooter = () => setMinified(true);

  /**
   * Handles expanding the footer
   */
  const expandFooter = () => setMinified(false);

  if (minified) return <FooterMinified expandFooter={expandFooter} />;

  return <FooterDefault minifyFooter={minifyFooter} />;
};

export default Footer;
