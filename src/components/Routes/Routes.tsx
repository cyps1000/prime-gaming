/**
 * External Imports
 */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/**
 * Component Imports
 */
import MainTest from "../MainTest";

/**
 *  Material UI Imports
 */
import Grid from "@material-ui/core/Grid";

/**
 * Imports the component styles
 */
import { useStyles } from "./Routes.styles";

/**
 * Defines the props interface
 */
export interface RoutesProps {}

/**
 * Displays the component
 */
const Routes: React.FC<RoutesProps> = (props) => {
  const {} = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Router>
      <Grid container className={classes.routes}>
        <Switch>
          <Route exact path="/" children={<MainTest text="Hello World" />} />
        </Switch>
      </Grid>
    </Router>
  );
};

export default Routes;
