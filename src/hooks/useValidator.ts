/**
 * Hooks
 */
import { useUtils } from "../hooks";
import { TFunction } from "react-i18next";

interface UseValidatorProps {
  validate: string[] | undefined;
  translator: TFunction<"translation"> | any;
  inputProps: {
    required?: boolean;
    min?: number;
    hasToMatch?: string | boolean | null;
    noValidate?: boolean;
    type?: string;
  };
}

/**
 * Defines the default props
 */
const defaultProps: UseValidatorProps = {
  validate: [],
  translator: () => {},
  inputProps: {
    required: false,
    min: 0,
    hasToMatch: false,
    noValidate: false,
    type: "",
  },
};

/**
 * Defines the main hook
 */
const useValidator = (props: UseValidatorProps) => {
  const { validate, translator: t, inputProps } = props;

  /**
   * Gets the input props
   */
  const { required, min, hasToMatch, noValidate, type } = inputProps;

  /**
   * Gets the utility function
   */
  const { isEmpty, isEmail, isSecurePassword, hasUppercase } = useUtils();

  /**
   * Checks if the input has a certain length
   */
  const isLengthTextBuilder = (value: string, min: number) => {
    const { length } = value;
    return length < min
      ? t("errorMinLength", {
          min: 4,
        })
      : "";
  };

  /**
   * Checks if the input is empty
   */
  const handleEmptyInput = (value: string) =>
    isEmpty(value) ? t("errorIsRequired") : "";

  /**
   * Checks if the input meets the minimum length
   */
  const handleMinLength = (value: string) => {
    if (!min) return "";

    if (value.length < min) {
      if (type === "password") return t("errorPasswordMinLength");
      return isLengthTextBuilder(value, min);
    }

    return "";
  };

  /**
   * Checks if the input matches another input
   */
  const handleMatchInput = (value: string) => {
    if (!hasToMatch) return;

    let error = t("errorNotEqual", {
      field: hasToMatch,
    });

    if (type === "password") {
      error = t("errorNotEqual", {
        field: t("the password"),
      });
    }

    const errorMessage = value !== hasToMatch ? error : "";
    return errorMessage;
  };

  /**
   * Checks for errors
   */
  const validateInput = (value: string) => {
    /**
     * Initialize the error message
     */
    let error: any = null;
    if (noValidate) return error;

    /**
     * Runs if the input is required
     * Checks if it is empty, errors out if it is.
     */
    if (required && validate && !validate.includes("hasToMatch")) {
      const error = handleEmptyInput(value);
      if (error) return error;
    }

    /**
     * Runs if the input has a min property
     * Checks if it meets the min length, errors out if it doesnt.
     */
    if ((min && required) || (value && min)) {
      const error = handleMinLength(value);
      if (error) return error;
    }

    validate &&
      validate.forEach((validation) => {
        switch (validation) {
          case "isEmail":
            if (value && !isEmail(value))
              return (error = t("errorInvalidEmail"));
            return error;
          case "strongPassword":
            if (value && !isSecurePassword(value)) {
              return (error = t("errorWeakPassword"));
            }
            return error;
          case "hasToMatch":
            return (error = handleMatchInput(value));
          default:
            break;
        }
      });

    return error;
  };

  return { validateInput };
};

useValidator.defaultProps = defaultProps;
export { useValidator };
