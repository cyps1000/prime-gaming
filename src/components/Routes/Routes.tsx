/**
 * External Imports
 */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/**
 * Component Imports
 */
import Main from "../Main";
import Navbar from "../Navbar";
import Body from "../Body";

/**
 *  Material UI Imports
 */
import Grid from "@material-ui/core/Grid";

/**
 * Imports the component styles
 */
import { useStyles } from "./Routes.styles";

/**
 * Displays the component
 */
const Routes: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Router>
      <Navbar />
      <Body>
        <Grid container className={classes.routes}>
          <Switch>
            <Route exact path="/" children={<Main text="Home" />} />
            <Route exact path="/test1" children={<h1>test1</h1>} />
            <Route exact path="/test2" children={<h1>test2</h1>} />
          </Switch>
        </Grid>
      </Body>
    </Router>
  );
};

export default Routes;
