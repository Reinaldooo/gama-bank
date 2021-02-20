import styled, { css } from "styled-components";
//
import { mainGreen, bounceX } from "../../../styles";

interface ButtonProps {
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
}

export const ButtonGenericContainer = styled.button<ButtonProps>`
  animation: ${(props) =>
    props._loading
      ? css`
          ${bounceX} 1s infinite
        `
      : null};
  width: ${(props) => (props._width || "100%")};
  margin-top: ${(props) => (props._marTop || "20px")};
  color: ${(props) => (props._color || "#FFFFFF")};
  border: ${(props) => (props._border || "transparent")};
  background-color: ${(props) => (props._bgColor || mainGreen )};
  padding: ${(props) => (props._padding || "15px 35px")};
  border-radius: 2rem;
  font-size: ${(props) => (props._fSize || "16px")};;
  transition: 0.8s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    transition: 0.8s;
    color: ${(props) => (props._colorHover || "#FFFFFF")};
    background-color: ${(props) => (props._bgHover || mainGreen)};
  }
`;