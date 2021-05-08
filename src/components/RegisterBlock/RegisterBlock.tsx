/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Internal Imports
 */
import { ChangeEvent, FormEvent, useState } from "react";

/**
 * Material UI Imports
 */
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

/**
 * Imports the component styles
 */
import { useStyles } from "./RegisterBlock.styles";

/**
 * Defines the props interface
 */
export interface RegisterBlockProps {
  text?: string;
  onClose: () => void;
}

/**
 * Displays the component
 */
const RegisterBlock: React.FC<RegisterBlockProps> = (props) => {
  const { onClose } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = inputs;

  /**
   *
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputs);
    onClose();
  };

  return (
    <Grid container>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t("signUp")}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label={t("fName")}
                {...textFieldProps}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label={t("lName")}
                name="lastName"
                value={lastName}
                onChange={handleChange}
                autoComplete="lname"
                {...textFieldProps}
              />
            </Grid>
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
                  <Checkbox value="allowExtraEmails" color="secondary" />
                }
                label={t("emailUpdates")}
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
            {t("signUp")}
          </Button>
        </form>
        <Grid container justify="flex-end">
          <Grid item>
            <Link
              href="#"
              variant="body2"
              underline="hover"
              className={classes.inputs}
            >
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default RegisterBlock;
