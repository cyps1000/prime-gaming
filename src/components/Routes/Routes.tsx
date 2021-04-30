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
            <Route exact path="/news" children={<Main text="News" />} />
            <Route exact path="/about" children={<Main text="About" />} />
            <Route exact path="/contact" children={<Main text="Contact" />} />
          </Switch>
        </Grid>
      </Body>
      <Footer />
    </Router>
  );
};

export default Routes;
