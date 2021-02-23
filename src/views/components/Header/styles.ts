import styled from 'styled-components'

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  transform: translate(65px, 55px);

  & a {
    border: none;
    outline: none;

    .logo-gama {
      max-width: 291px;
    }
  }
  
  
  

  @media (min-width: 0) and (max-width: 767px) {
    top: 0;
    left: 50%;
    transform: translate(-50%, 55px);
  }

  @media (min-width: 768px) and (max-width: 991px) {
    top: 0;
    left: 50%;
    transform: translate(-50%, 55px);
  }
`;