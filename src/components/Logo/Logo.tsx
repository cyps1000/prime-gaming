/**
 * External Imports
 */
import clsx from "clsx";
import { useHistory } from "react-router-dom";

/**
 * Imports assets
 */
import logo from "./logo.png";

/**
 * Imports the component styles
 */
import { useStyles } from "./Logo.styles";

/**
 * Defines the props interface
 */
export interface LogoProps {
  className?: string | any;
  alt?: string;
}

/**
 * Defines the default props
 */
const defaultProps: LogoProps = {
  alt: "logo",
};

/**
 * Displays the component
 */
const Logo: React.FC<LogoProps> = (props) => {
  const { className, alt } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Defines the component classes
   */
  const componentClasses = clsx(classes.logo, {
    [className]: !!className,
  });

  /**
   * Gets the history object
   */
  const history = useHistory();

  /**
   * Handles taking the user to the home page
   */
  const handleClick = () => history.push("/");

  return (
    <img
      onClick={handleClick}
      className={componentClasses}
      src={logo}
      alt={alt}
    />
  );
};

Logo.defaultProps = defaultProps;
export default Logo;
