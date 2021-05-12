/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Imports the component styles
 */
import { useStyles } from "./DashboardArticles.styles";

/**
 * Defines the props interface
 */
export interface DashboardArticlesProps {
  text?: string;
}

/**
 * Displays the component
 */
const DashboardArticles: React.FC<DashboardArticlesProps> = (props) => {
  const { text } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <div className={classes.root}>{t(text ? text : "DashboardArticles")}</div>
  );
};

export default DashboardArticles;
