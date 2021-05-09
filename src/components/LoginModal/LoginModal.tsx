import { ChangeEvent, FormEvent, useState } from "react";

/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Material UI Imports
 */
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

/**
 * Components Imports
 */
import Modal from "../Modal";
import ModalContent from "../ModalContent";

/**
 * Font Awesome Imports
 *
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

/**
 * Imports the component styles
 */
import { useStyles } from "./LoginModal.styles";

/**
 * Defines the props interface
 */
export interface LoginModalProps {
  text?: string;
  onClose: () => void;
  open: boolean;
}

/**
 * Displays the component
 */
const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { onClose, open, children } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Initializes the Form state
   */
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  /**
   * Gets the input state
   */
  const { email, password } = inputs;

  /**
   * Handles the style props
   */
  const textFieldProps = {
    inputProps: {
      className: classes.inputs,
    },
    InputProps: {
      classes: {
        root: classes.inputRoot,
        focused: classes.inputFocused,
        notchedOutline: classes.inputOutlined,
      },
    },
    InputLabelProps: {
      classes: {
        root: classes.rootLabel,
      },
    },
  };

  /**
   * Handles the state of the inputs
   */
  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  /**
   * Handles the action of submit button
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputs);
    onClose();
  };

  return (
    <Modal
      open={open}
      scroll="paper"
      maxWidth="sm"
      onClose={onClose}
      classes={{
        paper: classes.modal,
      }}
    >
      {children}
      <ModalContent>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOpenOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                {t("signIn")}
              </Typography>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label={t("email")}
                      name="email"
                      value={email}
                      onChange={handleChange}
                      autoComplete="email"
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label={t("password")}
                      type="password"
                      id="password"
                      value={password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="keepSignedIn" color="secondary" />
                      }
                      label={t("keepSignedIn")}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {t("signIn")}
                </Button>
              </form>
              <Typography component="h1" variant="h6">
                {t("signInAlternative")}
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.googleButton}
              >
                <FontAwesomeIcon
                  size="lg"
                  className={classes.googleIcon}
                  icon={faGoogle}
                />
                {t("signInGoogle")}
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.facebookButton}
              >
                <FontAwesomeIcon
                  size="lg"
                  className={classes.facebookIcon}
                  icon={faFacebook}
                />
                {t("signInFacebook")}
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2" className={classes.linkItem}>
                    {t("passwordForgot")}
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
