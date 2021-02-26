import styled from "styled-components";

export const ContainerE = styled.div`
  background-color: #eaeaea;
  color: #212529;
  width: 100%;
  height: 100vh;
  float: left;
  padding: 40px 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
 

  .LeftContent {
    width: 50%;
    max-width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;

    @media (min-width: 0) and (max-width: 767px) {
      width: 100%;
      max-width: 100%;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      width: 100%;
      max-width: 100%;
    }
    
    .container-text {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      max-width: 440px;

      @media (min-width: 0) and (max-width: 767px) {
        justify-content: center;
        align-items: center;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        justify-content: center;
        align-items: center;
      }
      
      .text-title {
        color: #000000;
        font-size: 42px;
        font-weight: 700;
        line-height: 49px;
        text-align: left;
        margin-bottom: 20px;

        @media (min-width: 0) and (max-width: 767px) {
          text-align: center;
        }

        @media (min-width: 768px) and (max-width: 991px) {
          text-align: center;
        }
      }
      
      .text-address {
        font-size: 14px;
        font-weight: 300;
        line-height: 30px;
        text-align: left;

        @media (min-width: 0) and (max-width: 767px) {
          text-align: center;
        }

        @media (min-width: 768px) and (max-width: 991px) {
          text-align: center;
        }

      }
    }
  }

  .RigthContent {
    width: 50%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-self: center;

    @media (min-width: 0) and (max-width: 767px) {
      padding-top: 30px;
      width: 100%;
      max-width: 100%;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      padding-top: 30px;
      width: 100%;
      max-width: 100%;
    }
    
    img {
      max-width: 441px;
      width: 100%;

      @media (min-width: 0) and (max-width: 767px) {
        max-width: 321px;
        width: 100%;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        max-width: 321px;
        width: 100%;
      }
    }
  }
`;


