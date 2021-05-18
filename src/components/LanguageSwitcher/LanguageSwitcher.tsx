/**
 * Imports Material UI Components
 */
import Switch from "@material-ui/core/Switch";
import clsx from "clsx";

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
  classes?: { color: string; track: string };
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
  classes: {
    color: "",
    track: "",
  },
};

/**
 * Displays the component
 */
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = (props) => {
  const { ukFlagUrl, roFlagUrl, classes } = props;

  /**
   * Gets the active language and language changer
   */
  const { activeLanguage, changeLanguage } = useLanguage();

  /**
   * Gets the component styles
   */
  const _classes = useStyles();

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
    <div data-testid="language-switcher" className={_classes.container}>
      <img className={_classes.flag} src={roFlagUrl} alt="ro" />
      <div>
        <Switch
          data-testid="language-switch-input"
          checked={activeLanguage === "en_en"}
          onChange={handleLanguageChange}
          color="secondary"
          classes={{
            colorSecondary: clsx(_classes.switchPrimary, {
              [classes!.color]: !!classes!.color,
            }),
            track: clsx(_classes.switchTrack, {
              [classes!.track]: !!classes!.track,
            }),
          }}
        />
      </div>
      <img className={_classes.flag} src={ukFlagUrl} alt="uk" />
    </div>
  );
};

LanguageSwitcher.defaultProps = defaultProps;
export default LanguageSwitcher;
