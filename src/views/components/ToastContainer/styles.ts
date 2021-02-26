import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 95%;
    padding: 30px 30px 30px 10px;
  }
`;
