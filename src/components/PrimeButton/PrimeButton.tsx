/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Imports the component Button from Material UI
 */
import Button from "@material-ui/core/Button";

/**
 * Imports the component styles
 */
import { useStyles } from "./PrimeButton.styles";

/**
 * Defines the props interface
 */
export interface PrimeButtonProps {
  text: string;
}

/**
 * Displays the component
 */
const PrimeButton: React.FC<PrimeButtonProps> = (props) => {
  const { text } = props;

  /**
   * Handles the translations
   */
  //const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color={"secondary"}>
        {text}
      </Button>
    </div>
  );
};

export default PrimeButton;
