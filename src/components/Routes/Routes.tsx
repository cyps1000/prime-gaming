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

/**
 * Dashboard component imports
 */
import DashboardNav from "../DashboardNav";
import DashboardArticles from "../DashboardArticles";

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
          <DashboardNav>
            <Switch>
              <Route exact path="/dashboard/overview">
                <h1>Overview</h1>
              </Route>
              <Route exact path="/dashboard/articles">
                <DashboardArticles />
              </Route>
            </Switch>
          </DashboardNav>
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
