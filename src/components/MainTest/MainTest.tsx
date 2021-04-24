import { useEffect } from "react";

/**
 * External Imports
 */
import axios from "axios";

/**
 * Imports Hooks
 */
import { useActions, useSelector } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./MainTest.styles";

/**
 * Defines the props interface
 */
export interface MainTestProps {
  text: string;
}

/**
 * Displays the component
 */
const MainTest: React.FC<MainTestProps> = (props) => {
  const { text } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Gets the actions.
   */
  const { getUser } = useActions();

  /**
   * Gets the User
   */
  const user = useSelector((state) => {
    const { user } = state;
    return user;
  });
  console.log(user);
  /**
   * Handles getting the api url
   */
  const getApiUrl = () => {
    if (process.env.NODE_ENV === "development")
      return process.env.REACT_APP_LOCAL_API;
    return process.env.REACT_APP_STAGING_API;
  };

  /**
   * Handles making a request to our api
   */
  /*const testApi = async () => {
    try {
      const urlBase = getApiUrl();
      const response = await axios.get(`${urlBase}/test-api`);
      const { data } = response;

      console.log("FROM API:", data);
    } catch (error) {
      console.error(error);
    }
  };*/

  /**
   * Triggers the request to the api on mount.
   */
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={classes.root}>
      <h1> {text} </h1>
    </div>
  );
};

export default MainTest;
