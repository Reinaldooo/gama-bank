import styled from "styled-components";
import { mainPurple } from "../../../../styles";

interface ButtonProps {
  _active?: boolean;
}

export const Buttons = styled.div`
  width: 215px;
  height: 40px;
  position: relative;
  button + button {
    margin-left: -2px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const Button = styled.button<ButtonProps>`
  position: relative;
  background-color: ${(props) => (props._active ? mainPurple : "none")};
  color: ${(props) => (props._active ? "white" : mainPurple)};
  font-size: 16px;
  padding: 5px 10px;
  border: 2px solid ${mainPurple};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
