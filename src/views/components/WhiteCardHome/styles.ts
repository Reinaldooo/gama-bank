import styled from "styled-components";

interface ContainerProps {
  _width?: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 1rem;
  color: #444;
  width: ${(props) => props._width};

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`;