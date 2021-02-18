import styled, { keyframes } from "styled-components";

const bubble = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(1.2);
}
100% {
  transform: scale(1);
}
`;

export const Container = styled.div`
  position: relative;
  &:hover {
    span {
      visibility: visible;
    }
  }

  svg {
    animation: ${bubble} 1s infinite;
  }

  span {
    width: 150px;
    background-color: #71aeda;
    color: #025aa2;
    padding: 10px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    visibility: hidden;
    transition: opacity 0.3s;

    &::before {
      content: "";
      border-style: solid;
      border-color: #71aeda transparent;
      border-width: 8px 8px 0 8px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
