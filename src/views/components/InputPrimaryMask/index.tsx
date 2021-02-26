import React, {
  useState,
  InputHTMLAttributes,
  useEffect,
  useRef,
  ChangeEvent,
} from "react";
import { useField } from "@unform/core";
import { IconBaseProps } from "react-icons";
import { FiAlertTriangle } from "react-icons/fi";
//
import * as S from "./styles";
import { formatCPF } from "../../../utils/formatter";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  mask: "BRL" | "CPF";
  icon?: React.ComponentType<IconBaseProps>;
}

const InputPrimaryMask: React.FC<InputProps> = ({
  icon: Icon,
  name,
  mask,
  ...rest
}) => {
  const [isFocused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);
  const isBRL = mask === "BRL";

  useEffect(() => {
    // Unform setup
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  function focus() {
    setFocused(true);
    clearError();
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let tValue = e.target.value;
    if (!isBRL) {
      setValue(formatCPF(tValue));
      return;
    }
    // Cleaning up the value, leaving only the numbers
    tValue = tValue.replace(/\D/g, "");

    if (!tValue) {
      setValue("");
      return;
    }
    // Length higher than 6 would mean more than R$ 9.999,99
    if (tValue.length > 6) return;

    if (tValue.length === 6) {
      tValue =
        tValue.slice(0, 1) + "." + tValue.slice(1, 4) + "," + tValue.slice(-2);
    } else if (tValue.length >= 3) {
      tValue = tValue.slice(0, -2) + "," + tValue.slice(-2);
    }
    setValue("R$ " + tValue);
  }

  return (
    <S.Container isFocused={isFocused} isErrored={!!error} isBRL={isBRL}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={focus}
        onBlur={() => setFocused(false)}
        onChange={(e) => handleChange(e)}
        value={value}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && (
        <S.ErrorTooltip title={error}>
          <FiAlertTriangle size={20} />
        </S.ErrorTooltip>
      )}
      {isBRL && (
        <S.MaxValue>
          Max: R$ 9.999,99
        </S.MaxValue>
      )}      
    </S.Container>
  );
};

export default InputPrimaryMask;
