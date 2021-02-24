import styled from "styled-components";
//
import happy from "../../../../assets/happy.png";

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 1rem;
  background: url(${happy}) no-repeat center bottom;
  background-size: 45%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 991px) {
    background: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
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
      justify-content: center;
      display: flex;
      flex-flow: column;
      align-items: center;
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
  
  .m-top {
    @media (min-width: 0) and (max-width: 767px) {
      margin-top: 140px;
      text-align: center;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      margin-top: 140px;
      text-align: center;
    }
  }
`;

export const RightContent = styled.div`
  flex: 0 0 25%;
  margin-right: 8rem;

  @media screen and (max-width: 1490px) {
    margin-right: 2.5rem;
  }
`;
