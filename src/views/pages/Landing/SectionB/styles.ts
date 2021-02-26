import styled from "styled-components";

export const ContainerSection = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: #EAEAEA;
  padding: 1.5rem 0;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
  }
`

export const ContainerContent = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;

  h2 {
    width: 100%;
    text-align: center;
    font-size: 32px;
    padding: 0 20px;

    @media (min-width: 0) and (max-width: 767px) {
        width: 100%;
        text-align: center;
        font-size: 25px;
        margin-bottom: 20px
    }

    @media (min-width: 768px) and (max-width: 991px) {
        width: 100%;
        text-align: center;
        font-size: 25px;
        margin-bottom: 20px
    }
  }

  h3 {
    padding-left: 100px;
    font-size: 20px;
  }

  @media screen and (max-width: 991px) {
    flex-direction: column;

    h2, h3 {
      padding: 0;
      text-align: center
    }
  }
`

export const DarkPart = styled.section`
  width: 50%;
  padding: 3rem 0;
  background-color: #000;
  color: #68DE5A;

  & img {
    margin-left: auto;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`

export const LightPart = styled.section`
  width: 50%;
  padding: 3rem 0;
  background-color: #f8f8f8;
  color: #1D1D1D;


  & div {
    display: flex;
    justify-content: center;
    margin: 3rem;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`