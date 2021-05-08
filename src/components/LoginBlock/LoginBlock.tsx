import { ChangeEvent, FormEvent, useEffect, useState } from "react";

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
import InputPassword from "../InputPassword";
import InputText from "../InputText";
import InputLabel from "../InputLabel";

/**
 * Imports Hooks
 */
import { useForm, FormConfig } from "../../hooks";

/**
 * Font Awesome Imports
 *
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

/**
 * Imports the component styles
 */
import { useStyles } from "./LoginBlock.styles";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";

/**
 * Defines the props interface
 */
export interface LoginBlockProps {
  text?: string;
  onClose: () => void;
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
const LoginBlock: React.FC<LoginBlockProps> = (props) => {
  const { onClose } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles submitting the form
   */
  const handleSubmit = (inputs: FormInputs) => {
    console.log(inputs);
  };

  /**
   * Defines the form config
   */
  const formConfig: FormConfig<FormInputs> = {
    defaultValues: {
      email: "",
      password: "",
    },
    autoFocus: true,
    submitFn: handleSubmit,
  };

  const {
    inputs,
    inputsReady,
    getAutoFocus,
    setErrors,
    submit,
    handleInputChange,
  } = useForm<FormInputs>(formConfig);

  /**
   * Gets the inputs and errors
   */
  const { email, password } = inputs;

  /**
   * Gets the autoFocus object
   */
  const autoFocus = inputsReady && getAutoFocus();

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate onSubmit={submit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputLabel htmlFor="email" text="Email" />
                <InputText
                  required
                  name="email"
                  value={email}
                  min={4}
                  validate={["isEmail"]}
                  onChange={handleInputChange}
                  debounce={inputsReady}
                  onError={setErrors}
                  autoFocus={autoFocus}
                  validateOnChange
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="password" text="Password" />
                <InputPassword
                  required
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  debounce={inputsReady}
                  onError={setErrors}
                  autoFocus={autoFocus}
                  validateOnChange
                  validate={["hasToMatch"]}
                  hasToMatch={email}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="secondary" />
                  }
                  label="Keep me signed in!"
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
              Sign In
            </Button>
          </form>
          <Typography component="h1" variant="h6">
            Or you can
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
            />{" "}
            Sign In with Google
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
            />{" "}
            Sign In with Facebook
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" className={classes.linkItem}>
                Forgot your password?
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginBlock;
