/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Imports Material UI Components
 */
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

/**
 * Imports the component styles
 */
import { useStyles } from "./NavbarSearchForm.styles";

/**
 * Defines the props interface
 */
export interface NavbarSearchFormProps {
  text?: string;
}

/**
 * Displays the component
 */
const NavbarSearchForm: React.FC<NavbarSearchFormProps> = (props) => {
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
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder={t("searchNav")}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export default NavbarSearchForm;
