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
  ukFlagUrl?: string;
  roFlagUrl?: string;
}

/**
 * Defines the default props for
 * the component
 */
const defaultProps: LanguageSwitcherProps = {
  ukFlagUrl:
    "https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png",
  roFlagUrl:
    "https://www.countryflags.com/wp-content/uploads/romania-flag-png-xl.png",
};

/**
 * Displays the component
 */
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = (props) => {
  const { ukFlagUrl, roFlagUrl } = props;

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
    <div data-testid="language-switcher" className={classes.container}>
      <img className={classes.flag} src={roFlagUrl} alt="ro" />
      <div>
        <Switch
          data-testid="language-switch-input"
          checked={activeLanguage === "en_en"}
          onChange={handleLanguageChange}
          color="secondary"
          classes={{
            colorPrimary: classes.switchPrimary,
            track: classes.switchTrack,
          }}
        />
      </div>
      <img className={classes.flag} src={ukFlagUrl} alt="uk" />
    </div>
  );
};

LanguageSwitcher.defaultProps = defaultProps;
export default LanguageSwitcher;
