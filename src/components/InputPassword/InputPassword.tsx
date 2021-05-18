import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
} from "react";

/**
 * External Imports
 */
import clsx from "clsx";
import shortid from "shortid";

/**
 * Material UI Imports
 */
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  VisibilityOutlined as VisibleIcon,
  VisibilityOffOutlined as InvisibleIcon,
} from "@material-ui/icons";

/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Hooks
 */
import { useValidator, Errors } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./InputPassword.styles";

/**
 * Defines the props interface
 */
export interface InputPasswordProps {
  id?: string;
  value: string;
  name: string;
  required?: boolean;
  preventPaste?: boolean;
  autoFocus: any;
  disabled?: boolean;
  noValidate?: boolean;
  showPasswordAdornment?: boolean;
  debounce: boolean;
  debounceTime?: number;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  validateOnChangeDelay?: number;
  min?: number;
  max?: number;
  maxLengthDefault?: number;
  onPaste?: (event: ClipboardEvent<HTMLDivElement>) => any;
  onChange: Function;
  onError?: Function;
  validate?: string[];
  hasToMatch?: string | null;
  className?: string | any;
  classes?: {
    input?: string;
  };
  apiErrors?: any;
}

/**
 * Defines the default props
 */
const defaultProps: InputPasswordProps = {
  id: "",
  value: "",
  name: "",
  required: false,
  preventPaste: false,
  autoFocus: false,
  disabled: false,
  noValidate: false,
  showPasswordAdornment: true,
  debounce: false,
  debounceTime: 500,
  validateOnBlur: true,
  validateOnChange: false,
  validateOnChangeDelay: 1200,
  min: 0,
  max: 0,
  maxLengthDefault: 524288,
  onPaste: () => {},
  onChange: () => {},
  onError: () => {},
  validate: [],
  hasToMatch: null,
  className: "",
  classes: {
    input: "",
  },
  apiErrors: {},
};

/**
 * Displays the component
 */
const InputPassword: React.FC<InputPasswordProps> = (props) => {
  const {
    id,
    value,
    name,
    required,
    preventPaste,
    autoFocus,
    disabled,
    noValidate,
    showPasswordAdornment,
    debounce,
    debounceTime,
    min,
    max,
    maxLengthDefault,
    onPaste,
    onChange,
    onError,
    validate,
    hasToMatch,
    className,
    classes,
    validateOnBlur,
    validateOnChange,
    validateOnChangeDelay,
    apiErrors,
  } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const _classes = useStyles();

  /**
   * Initializes the local input state
   */
  const [input, setInput] = useState("");

  /**
   * Init the input changed flag
   */
  const [inputChanged, setInputChanged] = useState(false);

  /**
   * Initializes the local error state
   */
  const [error, setError] = useState("");

  /**
   * Initializes the event state
   * Used to store the debounced event for later use
   */
  const [event, setEvent] = useState<
    ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | string
  >("");

  /**
   * Initializes the input verified flag
   * Used to update the useForm inputs and trigger the submit function
   */
  const [inputVerified, setInputVerified] = useState(false);

  /**
   * Initializes the state that hides/shows the password
   */
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Init the time the user is focused on the input
   */
  const [focusTime, setFocusTime] = useState(0);

  /**
   * Gets the validator
   */
  const { validateInput } = useValidator({
    validate,
    translator: t,
    inputProps: {
      min,
      required,
      hasToMatch,
      noValidate,
      type: "password",
    },
  });

  /**
   * Creates a ref used for autofocus
   */
  let inputRef = useRef<any>();

  /**
   * Initializes the error timer
   */
  let errorTimer = useRef<any>();

  /**
   * Initializes the input timer
   */
  let inputTimer = useRef<any>();

  /**
   * Initializes the input validation ref
   */
  let inputValidationTimer = useRef<any>();

  /**
   * Handles updating the form input on Enter
   */
  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>): any =>
    event.key === "Enter" && input && onChange(event);

  /**
   * Checks if there are any errors
   */
  const hasError = (errors: Errors | string) => errors && errors.length > 0;

  /**
   * Handles focusing the input
   */
  const focusInput = () => inputRef.current.focus();

  /**
   * Handles getting the autoFocus flag
   */
  const isFocused = () => {
    if (typeof autoFocus === "boolean") return autoFocus;

    return name ? autoFocus[name] : false;
  };

  /**
   * Handles resetting the focused state
   */
  const handleOnBlur = () => {
    if (validateOnBlur) {
      if (Date.now() - focusTime > 1000 || inputChanged) {
        handleLocalValidation(input);
      }
    }
  };

  /**
   * Handles initializing the focused time (How long has the user been focused in the input)
   */
  const handleOnFocus = () => {
    setFocusTime(Date.now());
  };

  /**
   * Displays the value
   */
  const displayValue = (value: string) => (value ? value : "");

  /**
   * Checks initial value
   */
  const isValidValue = (value: string) => value !== null && value !== undefined;

  /**
   * Handles getting the input ID
   */
  const getInputID = () => {
    if (id) return id;
    if (name) return name;
    if (noValidate && !id) return shortid.generate();
    return shortid.generate();
  };

  /**
   * Handles the local validation
   */
  const handleLocalValidation = (value: string) => {
    setError(validateInput(value));
  };

  /**
   * Handles the local state change
   * Stores and persists the event
   * Updates the local input state
   */
  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    /**
     * Calling event.persist() on the synthetic event removes the event from the pool allowing references to the event to be retained asynchronously.
     * @see https://medium.com/trabe/react-syntheticevent-reuse-889cd52981b6
     */
    event.persist();

    /**
     * Gets the value of the input
     */
    const newValue = event.target.value;

    /**
     * Handles the validation
     */
    handleValidation(newValue);

    /**
     * Stores the event for later use
     */
    setEvent(event);

    /**
     * Updates the local state
     */
    setInput(newValue);
  };

  /**
   * Handles the validation
   */
  const handleValidation = (value: string, isSubmit?: boolean) => {
    /**
     * Gets the error message for the specific input
     */
    const error = validateInput(value);

    if (!isSubmit && error) {
      setError("");
    } else {
      setError(error);
      onError &&
        onError((prevErrors: Errors) => ({ ...prevErrors, [name]: error }));
    }

    /**
     * Updates the errors state for the entire form
     */
    if (isSubmit) {
      !error && setInputVerified(true);
    }
  };

  /**
   * Prevents pasting into the input field
   */
  const handlePaste = (event: ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    return false;
  };

  /**
   * Shows / Hides the password field
   */
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  /**
   * Handles getting the input type
   */
  const getInputType = () => {
    if (!showPasswordAdornment) return "password";
    return showPassword ? "text" : "password";
  };

  /**
   * Handles getting the end adornment icon
   */
  const getAdornment = () => {
    if (!showPasswordAdornment) return null;

    return (
      <InputAdornment
        position="end"
        onClick={toggleShowPassword}
        classes={{
          root: clsx(_classes.endAdornment, {
            [_classes.adornmentError]: !!error,
          }),
        }}
      >
        <IconButton>
          {showPassword ? <VisibleIcon /> : <InvisibleIcon />}
        </IconButton>
      </InputAdornment>
    );
  };

  /**
   * Handles getting the text field props
   */
  const getTextFieldProps = () => {
    const props: TextFieldProps = {
      inputRef: inputRef,
      name: name,
      required: required,
      disabled: disabled,
      fullWidth: true,
      onChange: handleChange,
      onKeyPress: handleKeyPress,
      onBlur: handleOnBlur,
      onFocus: handleOnFocus,
      className: clsx(_classes.root, { [className]: !!className }),
      size: "small",
      variant: "outlined",
      value: displayValue(input),
      id: getInputID(),
      autoFocus: isFocused(),
      type: getInputType(),
      autoComplete: "new-password",
      onPaste: preventPaste ? handlePaste : onPaste,
      inputProps: {
        maxLength: max ? max : maxLengthDefault,
        className: clsx(_classes.inputBase, {
          [_classes.inputBaseError]: error,
        }),
      },
      InputProps: {
        endAdornment: getAdornment(),
        classes: {
          root: clsx(_classes.inputRoot, {
            [_classes.inputRootDisabled]: disabled,
          }),
          input: clsx(_classes.input, {
            // @ts-ignore
            [classes.input]: !!classes.input,
            [_classes.error]: error,
          }),
          focused: _classes.inputFocused,
          notchedOutline: clsx(_classes.inputOutlined, {
            [_classes.error]: error,
          }),
          error: _classes.error,
        },
        notched: false,
      },
      FormHelperTextProps: {
        classes: {
          error: _classes.errorMessage,
        },
      },
    };

    /**
     * Adds the error to the props
     */
    if (hasError(error) && !noValidate) {
      props["error"] = !!error;
      props["helperText"] = error;
    }

    return props;
  };

  /**
   * Handles validating the input on change
   */
  useEffect(() => {
    if (validateOnChange && input.length < 1)
      clearTimeout(inputValidationTimer.current);
    if (validateOnChange && input.length > 1) {
      clearTimeout(inputValidationTimer.current);
      inputValidationTimer.current = setTimeout(() => {
        handleLocalValidation(input);
      }, validateOnChangeDelay);
    }
    // eslint-disable-next-line
  }, [validateOnChange, input, hasToMatch]);

  /**
   * Handles cleaning the input before setting the state
   * It converts nulls and undefines to plain empty string.
   */
  useEffect(() => {
    isValidValue(value) ? setInput(value) : setInput("");
    // eslint-disable-next-line
  }, [value]);

  /**
   * Handles updating the form inputs if the form was submitted
   * This effect happens across all rendered inputs
   */
  useEffect(() => {
    if (debounce) handleValidation(input, true);
    // eslint-disable-next-line
  }, [debounce]);

  /**
   * Handles focusing on the input
   */
  useEffect(() => {
    if (debounce && error && autoFocus[name]) focusInput();
    // eslint-disable-next-line
  }, [autoFocus, debounce, error]);

  /**
   * Handles debouncing (updating) the form errors state
   * Syncs the local error with the forms errors
   */
  useEffect(() => {
    if (input) {
      clearTimeout(errorTimer.current);
      errorTimer.current = setTimeout(() => {
        onError &&
          onError((prevErrors: Errors) => ({ ...prevErrors, [name]: error }));
      }, debounceTime);
    }
    // eslint-disable-next-line
  }, [input]);

  /**
   * Handles debouncing (updating) the form inputs state
   * Syncs the local input with the forms inputs
   */
  useEffect(() => {
    if (event) {
      clearTimeout(inputTimer.current);
      inputTimer.current = setTimeout(() => {
        onChange(event);
      }, debounceTime);
    }
    // eslint-disable-next-line
  }, [input, event, error]);

  /**
   * Handles an edge case where an error state might not have updated
   */
  useEffect(() => {
    if (!input && !required && error) {
      setError(error);
      onError &&
        onError((prevErrors: Errors) => ({ ...prevErrors, [name]: error }));
    }
    // eslint-disable-next-line
  }, [input, error, required]);

  /**
   * Handles debouncing (updating) the form inputs state
   * Syncs the local input state with the forms input state
   * Used to trigger the onSubmit function
   */
  useEffect(() => {
    if (inputVerified && input) {
      if (event) {
        onChange(event);
        setInputVerified(false);
      } else {
        onChange(event, {
          name,
          value: input,
        });
        setInputVerified(false);
      }
    }
    // eslint-disable-next-line
  }, [inputVerified]);

  /**
   * Handles updating the input state when the value changes
   */
  useEffect(() => {
    if (value) {
      if (value !== input) {
        setInput(value);
      }

      if (validateOnChange) {
        const error = validateInput(value);
        setError(error);
      }
    }
    // eslint-disable-next-line
  }, [value]);

  /**
   * Sets any api errors as local errors to the input
   */
  useEffect(() => {
    if (apiErrors[name]) {
      setError(apiErrors[name]);
      setInputVerified(false);
    }
    // eslint-disable-next-line
  }, [apiErrors]);

  /**
   * Handles updating the input changed flag
   */
  useEffect(() => {
    if (input.length > 0 && !inputChanged) setInputChanged(true);
  }, [input, inputChanged]);

  return <TextField {...getTextFieldProps()} />;
};

InputPassword.defaultProps = defaultProps;
export default InputPassword;
