/**
 * Imports the component styles
 */
import { useStyles } from "./Main.styles";

/**
 * Defines the props interface
 */
export interface MainProps {
  text?: string;
}

/**
 * Defines the default props
 */
const defaultProps: MainProps = {
  text: "Main",
};

/**
 * Displays the component
 */
const Main: React.FC<MainProps> = (props) => {
  const { text } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>{text}</h1>
    </div>
  );
};

Main.defaultProps = defaultProps;
export default Main;
