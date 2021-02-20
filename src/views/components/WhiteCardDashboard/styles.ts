import styled from "styled-components";

interface ContainerCardDash {
    _maxWidth?: string;
    _Height?: string;
}

export const WhiteCardDashboard = styled.div<ContainerCardDash>`
  background: #FBFBFB;
  border-radius: 8px;
  width: 100%;
  padding: 40px;
  max-width: ${(props => (props._maxWidth))};
  height: ${(props => (props._Height))};

  @media (min-width: 0) and (max-width: 767px) {
    max-width: 100%;
    height: auto;
    padding: 20px;
    
    &:last-of-type {
      margin-top: 20px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 100%;
    height: auto;
    padding: 20px;
    
    &:last-of-type {
      margin-top: 20px;
    }
  }
`;