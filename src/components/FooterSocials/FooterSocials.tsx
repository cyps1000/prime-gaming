/**
 * External Imports
 */
import clsx from "clsx";

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
 * Defines the props interface
 */
export interface FooterSocialsProps {
  className?: string | any;
}

/**
 * Displays the component
 */
const FooterSocials: React.FC<FooterSocialsProps> = (props) => {
  const { className } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Defines the component classes
   */
  const componentClasses = clsx(classes.icon, {
    [className]: className,
  });

  return (
    <div className={classes.root}>
      <IconButton>
        <FacebookIcon className={componentClasses} />
      </IconButton>
      <IconButton>
        <TwitterIcon className={componentClasses} />
      </IconButton>
      <IconButton>
        <InstagramIcon className={componentClasses} />
      </IconButton>
      <IconButton>
        <YouTubeIcon className={componentClasses} />
      </IconButton>
    </div>
  );
};

export default FooterSocials;
