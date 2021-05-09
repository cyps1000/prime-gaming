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
import Footer from "../Footer";
import LandingPage from "../LandingPage";
import DashboardNav from "../DashboardNav";

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
      <Switch>
        <Route path="/dashboard">
          <Switch>
            <Route exact path="/dashboard">
              <DashboardNav />
            </Route>
            <Route exact path="/dashboard/login">
              <h1>login</h1>
            </Route>
          </Switch>
        </Route>

        <Route path="/">
          <Navbar />
          <Body>
            <Grid
              data-testid="router-grid"
              container
              className={classes.routes}
            >
              <Switch>
                <Route exact path="/" children={<LandingPage />} />
                <Route exact path="/news" children={<Main text="News" />} />
                <Route exact path="/about" children={<Main text="About" />} />
                <Route
                  exact
                  path="/contact"
                  children={<Main text="Contact" />}
                />
              </Switch>
            </Grid>
          </Body>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
