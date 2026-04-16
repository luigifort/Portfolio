import {
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
  type ValidationResult,
} from "react-aria-components/TextField";
import { tv } from "tailwind-variants";
import {
  Description,
  FieldError,
  Input,
  Label,
  fieldBorderStyles,
} from "./Field";
import { composeTailwindRenderProps, focusRing } from "@/_utils/utils";

const inputStyles = tv({
  extend: focusRing,
  base: "peer border-1 rounded-lg min-h-9 font-sans text-sm py-0 px-5 box-border transition bg-bg text-primary transition-all ease-in-out duration-300",
  variants: {
    isFocused: fieldBorderStyles.variants.isFocusWithin,
    isInvalid: fieldBorderStyles.variants.isInvalid,
    isDisabled: fieldBorderStyles.variants.isDisabled,
  },
});

const labelStyles =
  "text-primary z-1 relative transition-all ease-in-out duration-300 peer-focus:bg-bg peer-focus:bottom-12.5 peer-focus:text-xs peer-focus:px-1 peer-placeholder-shown:bottom-8 left-4.5 peer-not-placeholder-shown:bottom-12.5  peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:bg-bg";

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  placeholder?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function TextField({
  label,
  description,
  errorMessage,
  ...props
}: TextFieldProps) {
  return (
    <AriaTextField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-1 font-sans"
      )}
    >
      <Input className={inputStyles} />

      {label && <Label className={labelStyles}>{label}</Label>}
      {description && <Description>{description}</Description>}
      {errorMessage && (
        <FieldError className={"relative bottom-6"}>{errorMessage}</FieldError>
      )}
    </AriaTextField>
  );
}
