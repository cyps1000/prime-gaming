/**
 *  Material UI Imports
 */
import DialogActions, {
  DialogActionsProps,
} from "@material-ui/core/DialogActions";

/**
 * Imports the component styles
 */
import { useStyles } from "./ModalActions.styles";

/**
 * Defines the props interface
 */
export interface ModalActionsProps {
  className?: string | number | symbol | any;
  render?: boolean;
  children: JSX.Element[] | JSX.Element | null;
}

const defaultProps: ModalActionsProps = {
  className: "",
  render: true,
  children: null,
};

/**
 * Displays the component
 */
const ModalActions: React.FC<ModalActionsProps> = (props) => {
  const { className, children } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Defines the dialog classes
   */
  const actionsClasses: DialogActionsProps["classes"] = {
    root: classes.root,
  };

  return (
    <DialogActions className={className} classes={actionsClasses}>
      {children}
    </DialogActions>
  );
};

ModalActions.defaultProps = defaultProps;
export default ModalActions;
