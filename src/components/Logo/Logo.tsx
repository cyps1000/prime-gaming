/**
 * External Imports
 */
import clsx from "clsx";

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
}

/**
 * Displays the component
 */
const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props;

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

  return <img className={componentClasses} src={logo} alt="logo" />;
};

export default Logo;
