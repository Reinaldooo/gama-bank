import styled from "styled-components";

interface ContainerProps {
  large?: boolean
}

export const HideContainer = styled.div<ContainerProps>`
  background: rgb(214, 214, 214);
  background: -moz-linear-gradient(
    90deg,
    rgba(214, 214, 214, 1) 0%,
    rgba(211, 199, 222, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(214, 214, 214, 1) 0%,
    rgba(211, 199, 222, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(214, 214, 214, 1) 0%,
    rgba(211, 199, 222, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d6d6d6",endColorstr="#d3c7de",GradientType=1);
  width: ${props => props.large ? "350px" : "150px"};
  height: ${props => props.large ? "80px" : "20px"};
  border-radius: 5px;
`;
