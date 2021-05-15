/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Material UI Imports
 */
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

/**
 * Components Imports
 */
import Modal from "../Modal";
import ModalContent from "../ModalContent";
import ModalTitle from "../ModalTitle";
import InputLabel from "../InputLabel";
import InputPassword from "../InputPassword";
import InputText from "../InputText";

/**
 * Imports hooks
 */
import { useForm, FormConfig } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./RegisterModal.styles";

/**
 * Defines the props interface
 */
export interface RegisterModalProps {
  text?: string;
  onClose: () => void;
  open: boolean;
  isMobile?: boolean;
}

/**
 * Defines the form inputs interface
 */
interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

/**
 * Displays the component
 */
const RegisterModal: React.FC<RegisterModalProps> = (props) => {
  const { onClose, open, isMobile } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles the action of submit button
   */
  const handleSubmit = (inputs: FormInputs) => {
    console.log(inputs);
  };

  /**
   * Defines the useForm config
   */
  const formConfig: FormConfig<FormInputs> = {
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    submitFn: handleSubmit,
    autoFocus: true,
  };

  /**
   * Initialize the useForm hook
   */
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
  const { firstName, lastName, email, password } = inputs;

  return (
    <Modal
      scroll="paper"
      maxWidth="sm"
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.modal,
      }}
    >
      {isMobile && (
        <ModalTitle
          onClick={onClose}
          classes={{
            container: classes.titleContainer,
            icon: classes.modalIcon,
          }}
        />
      )}
      <ModalContent>
        <Grid container>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t("signUp")}
            </Typography>
            <form className={classes.form} noValidate onSubmit={submit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <InputText
                    value={firstName}
                    name="firstName"
                    label={t("firstName")}
                    min={1}
                    max={20}
                    autoFocus={autoFocus}
                    onChange={handleInputChange}
                    debounce={inputsReady}
                    validateOnChange
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputText
                    value={lastName}
                    name="lastName"
                    label={t("lastName")}
                    min={1}
                    max={20}
                    autoFocus={autoFocus}
                    onChange={handleInputChange}
                    debounce={inputsReady}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputText
                    value={email}
                    name="email"
                    label={t("email")}
                    min={4}
                    autoFocus={autoFocus}
                    onChange={handleInputChange}
                    debounce={inputsReady}
                    validate={["isEmail"]}
                    validateOnChange
                    prefix={<EmailOutlinedIcon />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputPassword
                    value={password}
                    name="password"
                    label={t("password")}
                    min={6}
                    validate={["strongPassword"]}
                    autoFocus={autoFocus}
                    onChange={handleInputChange}
                    debounce={inputsReady}
                    validateOnChange
                    prefix={<LockOutlinedIcon />}
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
                  {t("alreadyHaveAnAccount")}
                </Link>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
