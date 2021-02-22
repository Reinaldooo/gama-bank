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

      .titulo-card {
        margin: 20px 0;
        font-weight: 700;
        font-size: 20px;
        text-align: center
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
