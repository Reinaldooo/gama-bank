import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isBRL: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: transparent;
  position: relative;
  width: 100%;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border: none;
  border-bottom: 2px solid #878686;
  color: #555;
  margin-bottom: 1.2rem;
  transition: border 0.8s;

  ${(props) =>
    props.isErrored &&
    css`
      color: #e6505c;
      border-color: #e6505c;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #8c52e5;
      border-color: #8c52e5;
    `}

  input {
    background-color: transparent;
    flex: 1;
    border: 0;
    height: 35px;
    color: #222;
    outline: none;
    font-size: ${(props) => (props.isBRL ? "1.1rem" : "0.9rem")};

    &::placeholder {
      color: #999;
    }
  }

  + div {
    margin-top: 10px;
  }

  svg {
    margin-right: 15px;
  }
`;

export const ErrorTooltip = styled(Tooltip)`
  margin-left: 15px;

  svg {
    margin: 0;
  }

  span {
    color: #fff;
    background-color: #e6505c;

    &::before {
      border-color: #e6505c transparent;
    }
  }
`;

export const MaxValue = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  color: #8c52e5;
  position: absolute;
  right: 0;

  @media screen and (max-width: 380px) {
    top: 50px;
    width: 100%;
    text-align: center;
  }
`;
