/**
 * Imports Material UI Components
 */
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

/**
 * Imports the component styles
 */
import { useStyles } from "./NavbarMenu.styles";

/**
 * Defines the props interface
 */
export interface NavbarMenuProps {
  onClick: () => void;
}

/**
 * Displays the component
 */
const NavbarMenu: React.FC<NavbarMenuProps> = (props) => {
  const { onClick } = props;

  const classes = useStyles();

  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
      onClick={onClick}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default NavbarMenu;