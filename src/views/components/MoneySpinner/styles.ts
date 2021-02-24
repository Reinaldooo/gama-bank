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
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-80%);

  svg {
    animation: ${bubble} 1s infinite;
  }
`;
