import styled from "styled-components";
import { mainPurple } from '../../../styles'

export const ContainerCard = styled.section`
  width: 100%;
  position: relative;
  display: block;
  float: left;

  .section-login {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${mainPurple};

    @media (min-width: 0) and (max-width: 767px) {
      padding: 0 20px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      padding: 0 20px;
    }

    .white-card {
      background-color: #FFFFFF;
      width: 100%;
      max-width: 455px;
      height: 422px;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      border-radius: 8px;

      @media (min-width: 0) and (max-width: 767px) {
        height: auto;
        padding: 20px 0;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        height: auto;
        padding: 20px 0;
      }

      .titulo-card {
        margin: 0 0 20px;
        font-weight: 700;
        font-size: 20px;
        text-align: center;

        @media (min-width: 0) and (max-width: 767px) {
          margin: 20px 0 10px;
        }

        @media (min-width: 768px) and (max-width: 991px) {
          margin: 20px 0 10px;
        }
      }

      .subtitulo-card {
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        margin-bottom: 20px;
        opacity: 0.5;
      }
    }
  }
`;
