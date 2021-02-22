import styled from 'styled-components'

export const Header = styled.header`
  padding: 2rem;

  & a {
    border: none;
    outline: none;
  }

  & img {
    @media screen and (max-width: 768px) {
      height: 50px;
    }
  }
`;