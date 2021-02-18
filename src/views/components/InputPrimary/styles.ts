import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #fff;
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
    height: 45px;
    color: #222;
    outline: none;
    font-size: 0.9rem;

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
