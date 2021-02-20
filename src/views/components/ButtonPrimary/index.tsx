import React, { ButtonHTMLAttributes } from "react";
//
import * as S from "./styles";
import rightArrow from "../../../assets/right-arrow.png";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  _width?: string;
  loading?: boolean;
};

const ButtonPrimary: React.FC<ButtonProps> = ({
  title,
  _width,
  loading,
  ...rest
}) => {
  return (
    <S.Button
      type="button"
      className="button-primary"
      _width={_width}
      _marTop="2.5rem"
      loading={loading || undefined}
      disabled={loading}
      {...rest}
    >
      {loading ? "Carregando" : title}
      <img src={rightArrow} alt="" />
    </S.Button>
  );
};

export default ButtonPrimary;