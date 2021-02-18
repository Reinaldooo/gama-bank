import styled from "styled-components";
//
import happy from "../../../../assets/happy.png";

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  padding: 1rem;
  background: url(${happy}) no-repeat center bottom;
  background-size: 45%;

  @media screen and (max-width: 991px) {
    background: none;
  }
`;

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

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 80%;
  color: #fff;
  font-weight: 400;

  @media screen and (max-width: 1199px) {
    margin-top: -2rem;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    justify-content: center;
  }

  & > div {
    @media screen and (max-width: 1459px) {
      flex: 0 0 35%;
    }
    @media screen and (max-width: 1023px) {
      flex: 0 0 48%;
    }
    @media screen and (max-width: 991px) {
      flex: 0 0 80%;
      margin: 2rem auto;
    }
  }
`;

export const LeftContent = styled.div`
  flex: 0 0 25%;
  margin-left: 8rem;
  @media screen and (max-width: 1490px) {
    margin-left: 2.5rem;
  }

  & span {
    display: block;
    font-size: 2rem;
    margin-bottom: 1.3rem;
  }
`;

export const RightContent = styled.div`
  flex: 0 0 25%;
  margin-right: 8rem;

  @media screen and (max-width: 1490px) {
    margin-right: 2.5rem;
  }
`;
