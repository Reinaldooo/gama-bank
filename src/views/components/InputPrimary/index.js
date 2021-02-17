import { useState } from "react";
//
import * as S from "./styles";

export default function InputPrimary({ icon: Icon, ...rest }) {
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
}
