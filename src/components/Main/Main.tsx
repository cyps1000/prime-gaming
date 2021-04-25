import { useState, useEffect } from "react";

/**
 * External Imports
 */
import axios from "axios";

/**
 * Imports from store
 */
import { Article } from "../../redux";

/**
 * Imports Hooks
 */
import { useActions, useSelector } from "../../hooks";

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
 * Displays the component
 */
const Main: React.FC<MainProps> = (props) => {
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
   * Init the articles
   */
  const [articles, setArticles] = useState<Article[]>([]);

  /**
   * Gets the User
   */
  const user = useSelector((state) => {
    const { user } = state;
    return user?.user;
  });

  /**
   * Handles making a request to our api
   */
  const mockApiCall = async () => {
    try {
      const response = await axios.get(`/v1/articles`);
      const { data } = response;

      console.log("FROM MOCK API:", data);
      setArticles(data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Triggers on first mount.
   */
  useEffect(() => {
    getUser();
    mockApiCall();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      {text}
      <h1> Hello {user?.name}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}> {article.title} </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
