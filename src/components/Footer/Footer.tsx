import { useState } from "react";

/**
 * Imports Components
 */
import FooterDefault from "../FooterDefault";
import FooterMinified from "../FooterMinified";

/**
 * Displays the component
 */
const Footer: React.FC = () => {
  /**
   * Init the Footer state
   */
  const [minified, setMinified] = useState(false);

  /**
   * Handles minifying the footer
   */
  const minifyFooter = () => {
    setMinified(true);
  };

  /**
   * Handles expanding the footer
   */
  const expandFooter = () => setMinified(false);

  if (minified) return <FooterMinified expandFooter={expandFooter} />;

  return <FooterDefault minifyFooter={minifyFooter} />;
};

export default Footer;
