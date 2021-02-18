import styled from "styled-components";
import { mainPurple } from '../../../../styles'

export const BlockSection = styled.section`
  width: 100%;
  position: relative;
  display: block;
  float: left;
  margin: 0;
  padding: 0;

  .home-03 {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${mainPurple};

    .elementos-anuidade {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;

      @media (min-width: 0) and (max-width: 767px) {
        flex-flow: column;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        flex-flow: column;
      }

      .interno {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;

        @media (min-width: 0) and (max-width: 767px) {
          width: 100%;
        }

        @media (min-width: 768px) and (max-width: 991px) {
          width: 100%;
        }

        .bloco01 {
          width: 100%;
          max-width: 460px;
          padding: 0 30px;

          .titulo-anuidade {
            font-weight: 700;
            font-size: 42px;
            color: #ffffff;

            @media (min-width: 0) and (max-width: 767px) {
              text-align: center;
              font-size: 35px;
            }

            @media (min-width: 768px) and (max-width: 991px) {
              text-align: center;
            }
          }

          .subtitulo-anuidade {
            margin-top: 20px;
            font-weight: 500;
            font-size: 23px;
            color: #ffffff;

            @media (min-width: 0) and (max-width: 767px) {
              text-align: center;
              font-size: 20px;
            }

            @media (min-width: 768px) and (max-width: 991px) {
              text-align: center;
            }
          }
        }

        .bloco02 {
          width: 100%;
          max-width: 460px;
          padding: 0 30px;
          display: flex;
          justify-content: center;
          align-items: center;

          .titulo-valor-anuidade {
            font-weight: 500;
            font-size: 186px;
            color: #68de5a;
            text-align: center;

            @media (min-width: 0) and (max-width: 767px) {
              font-size: 130px;
              text-align: center;
              margin-top: 10px;
            }

            @media (min-width: 768px) and (max-width: 991px) {
              margin-top: 10px;
              text-align: center;
            }
          }
        }
      }
    }
  }

`