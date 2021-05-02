/**
 * Material UI Imports
 */
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import IconButton from "@material-ui/core/IconButton";

/**
 * Imports the component styles
 */
import { useStyles } from "./FooterSocials.styles";

/**
 * Displays the component
 */
const FooterSocials: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton>
        <FacebookIcon className={classes.icon} />
      </IconButton>
      <IconButton>
        <TwitterIcon className={classes.icon} />
      </IconButton>
      <IconButton>
        <InstagramIcon className={classes.icon} />
      </IconButton>
      <IconButton>
        <YouTubeIcon className={classes.icon} />
      </IconButton>
    </div>
  );
};

export default FooterSocials;
