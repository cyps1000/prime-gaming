/**
 * Imports Material UI Components
 */
import Switch from "@material-ui/core/Switch";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

/**
 * Imports the component styles
 */
import { useStyles } from "./ThemeSwitcher.styles";

/**
 * Imports Hooks
 */
import { useTheme } from "../../hooks";

/**
 * Defines the props interface
 */
export interface ThemeSwitcherProps {
  text?: string;
}

/**
 * Displays the component
 */
const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { text } = props;

  /**
   * Gets the active theme and theme changer
   */
  const { activeTheme, changeTheme } = useTheme();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles changing the theme
   */
  const handleThemeChange = () => {
    changeTheme(activeTheme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  return (
    <div className={classes.themeFix}>
      <Brightness7Icon />
      <Switch
        checked={activeTheme === "dark-theme"}
        onChange={handleThemeChange}
        color="secondary"
        name="checkedB"
        className={classes.switchFix}
        classes={{
          colorPrimary: classes.switchPrimary,
        }}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Brightness4Icon />
    </div>
  );
};

export default ThemeSwitcher;
