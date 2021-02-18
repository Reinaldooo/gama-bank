import React, { useState, InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { IconBaseProps } from "react-icons";
import { FiAlertTriangle } from "react-icons/fi";
//
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const InputPrimary: React.FC<InputProps> = ({ icon: Icon, name, ...rest }) => {
  const [isFocused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    // Unform setup
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <S.Container isFocused={isFocused} isErrored={!!error}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && (
        <S.ErrorTooltip title={error}>
          <FiAlertTriangle size={20} />
        </S.ErrorTooltip>
      )}
    </S.Container>
  );
};

export default InputPrimary;
