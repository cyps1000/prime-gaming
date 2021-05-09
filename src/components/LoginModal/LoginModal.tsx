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
import InputLabel from "../InputLabel";
import InputPassword from "../InputPassword";
import InputText from "../InputText";

/**
 * Font Awesome Imports
 *
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

/**
 * Imports hooks
 */
import { useForm, FormConfig } from "../../hooks";

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
 * Defines the form inputs interface
 */
interface FormInputs {
  email: string;
  password: string;
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

  const handleSubmit = (inputs: FormInputs) => {
    console.log(inputs);
  };

  /**
   * Defines the useForm config
   */
  const formConfig: FormConfig<FormInputs> = {
    defaultValues: {
      email: "",
      password: "",
    },
    submitFn: handleSubmit,
    autoFocus: true,
  };

  const {
    inputs,
    inputsReady,
    getAutoFocus,
    submit,
    handleInputChange,
  } = useForm(formConfig);

  /**
   * Gets the autoFocus object
   */
  const autoFocus = inputsReady && getAutoFocus();

  /**
   * Gets the input state
   */
  const { email, password } = inputs;

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
              <form className={classes.form} noValidate onSubmit={submit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel text="Email" htmlFor="email" />
                    <InputText
                      value={email}
                      name="email"
                      min={4}
                      autoFocus={autoFocus}
                      onChange={handleInputChange}
                      debounce={inputsReady}
                      validate={["isEmail"]}
                      validateOnChange
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel text="Password" htmlFor="password" />
                    <InputPassword
                      value={password}
                      name="password"
                      min={6}
                      validate={["strongPassword"]}
                      autoFocus={autoFocus}
                      onChange={handleInputChange}
                      debounce={inputsReady}
                      validateOnChange
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
