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
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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

/**
 * Defines the props interface
 */
export interface LoginBlockProps {
  text?: string;
  onClose: () => void;
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
   * Initializes the Form state
   */
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
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
    </Container>
  );
};

export default LoginBlock;
