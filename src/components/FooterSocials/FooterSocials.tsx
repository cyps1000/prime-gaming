/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Material UI Imports
 */
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

/**
 * Imports the component styles
 */
import { useStyles } from "./FooterSocials.styles";

/**
 * Defines the props interface
 */
export interface FooterSocialsProps {
  text?: string;
}

/**
 * Displays the component
 */
const FooterSocials: React.FC<FooterSocialsProps> = (props) => {
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
    <div className={classes.root}>
      <FacebookIcon className={classes.icon} />
      <TwitterIcon className={classes.icon} />
      <InstagramIcon className={classes.icon} />
      <YouTubeIcon className={classes.icon} />
    </div>
  );
};

export default FooterSocials;
