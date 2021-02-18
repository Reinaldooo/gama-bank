import styled, { css } from "styled-components";
import { animated } from "react-spring";

interface ContainerProps {
  type?: "error" | "success";
}

const toastTypes = {
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  background: #fff;
  color: #71aeda;

  /* Will apply different styles depending on the type prop */
  ${(props) => props.type && toastTypes[props.type]}

  /* Toasts that come below others have margins */
  & + div {
    margin-top: 10px;
  }

  > svg {
    margin: 0 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 3px;
      font-size: 14px;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 8px;
    top: 8px;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
