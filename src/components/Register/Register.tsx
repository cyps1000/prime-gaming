/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Internal imports
 */
import { useState } from "react";

/**
 * Material UI Imports
 */
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

/**
 * Componnents Imports
 */
import RegisterBlock from "../RegisterBlock";

/**
 * Imports the component styles
 */
import { useStyles } from "./Register.styles";

/**
 * Defines the props interface
 */
export interface RegisterProps {
  text?: string;
}

/**
 * Displays the component
 */
const Register: React.FC<RegisterProps> = (props) => {
  const { text } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles Modal's state
   */
  const [open, setOpen] = useState(false);

  /**
   * Handles opening the Modal
   */
  const handleClickOpen = () => {
    setOpen(true);
  };

  /**
   * Handles closing the Modal
   */
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Open Sign Up modal
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={{
          paper: classes.modal,
        }}
      >
        <RegisterBlock onClose={handleClose} />
      </Dialog>
    </div>
  );
};

export default Register;
