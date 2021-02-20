import React, { ButtonHTMLAttributes } from "react";
import { ButtonGenericContainer } from "./styles";
import {IconBaseProps} from "react-icons";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  _width?: string;
  _marTop?: string;
  _color?: string;
  _border?: string;
  _bgColor?: string;
  _bgHover?: string;
  _colorHover?: string;
  _fSize?: string;
  _padding?: string;
  _loading?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
};

const ButtonGeneric: React.FC<ButtonProps> = ({
  title,
  _loading,
  icon: Icon,
  ...rest
}) => {

  return (
    <ButtonGenericContainer
      type="button"
      disabled={_loading}
      _loading={_loading}
      {...rest}
    >
      {_loading ? "Carregando" : title}
      {Icon && <Icon size={21} />}
    </ButtonGenericContainer>
  );
};

export default ButtonGeneric;