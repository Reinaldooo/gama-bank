import React, { useState, InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
//
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const InputPrimary: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <S.Container isFocused={isFocused} isErrored={false}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />
    </S.Container>
  );
};

export default InputPrimary;
