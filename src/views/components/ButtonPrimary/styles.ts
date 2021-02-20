import styled, { css } from "styled-components";
//
import { mainGreen, mainPurple, bounceX } from "../../../styles";

interface ButtonProps {
  _width?: string;
  _marTop?: string;
  loading?: boolean;
}

export const Button = styled.button<ButtonProps>`
  animation: ${(props) =>
    props.loading
      ? css`
          ${bounceX} 1s infinite
        `
      : null};
  width: ${(props) => (props._width ? props._width : "60%")};
  margin-top: ${(props) => (props._marTop ? props._marTop : 0)};
  background-color: #fff;
  color: ${mainPurple};
  border: 2px solid ${mainPurple};
  padding: 0.8rem 1.3rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  transition: background 0.8s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: ${mainGreen};
  }
`;