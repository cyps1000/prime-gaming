/**
 * Imports Material UI Components
 */
import Switch from "@material-ui/core/Switch";

/**
 * Imports Hooks
 */
import { useLanguage } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./LanguageSwitcher.styles";

/**
 * Defines the props interface
 */
export interface LanguageSwitcherProps {
  text?: string;
}

/**
 * Displays the component
 */
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = (props) => {
  const { text } = props;

  /**
   * Gets the active language and language changer
   */
  const { activeLanguage, changeLanguage } = useLanguage();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles changing the language
   */
  const handleLanguageChange = () => {
    if (activeLanguage === "en_en") {
      changeLanguage("en_ro");
    } else {
      changeLanguage("en_en");
    }
  };

  return (
    <div className={classes.themeFix}>
      <img
        className={classes.flag}
        src="https://www.countryflags.com/wp-content/uploads/romania-flag-png-xl.png"
        alt="ro"
      />
      <div>
        <Switch
          checked={activeLanguage === "en_en"}
          onChange={handleLanguageChange}
          color="secondary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
          classes={{
            colorPrimary: classes.switchPrimary,
            track: classes.switchTrack,
          }}
        />
      </div>
      <img
        className={classes.flag}
        src="https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png"
        alt="uk"
      />
    </div>
  );
};

export default LanguageSwitcher;
