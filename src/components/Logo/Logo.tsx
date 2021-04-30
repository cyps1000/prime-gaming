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
  text?: string;
}

/**
 * Displays the component
 */
const Logo: React.FC<LogoProps> = (props) => {
  const { text } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return <img className={classes.logo} src={logo} alt="logo" />;
};

export default Logo;
