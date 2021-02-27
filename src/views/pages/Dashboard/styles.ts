import styled from "styled-components";

export const ContainerDashboard = styled.div`
  padding-left: 160px;
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media (min-width: 0) and (max-width: 767px) {
    padding-left: 0;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding-left: 0;
  }

  .div-row {
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row wrap;

    &:last-of-type {
      padding-bottom: 50px;
    }

    @media (min-width: 0) and (max-width: 767px) {
      &:last-of-type {
        padding-bottom: 0;
      }
    }

    @media (min-width: 768px) and (max-width: 991px) {
      &:last-of-type {
        padding-bottom: 0;
      }
    }

    .cards-row {
      width: 100%;
      max-width: 1000px;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;

      &:last-of-type {
        margin-top: 50px;
      }

      @media (min-width: 0) and (max-width: 767px) {
        max-width: 100%;
        display: block;

        &:last-of-type {
          margin-top: 0 !important;
        }

        &.last {
          margin-bottom: 180px;
        }
      }

      @media (min-width: 768px) and (max-width: 991px) {
        max-width: 100%;
        display: block;

        &:last-of-type {
          margin-top: 0 !important;
        }

        &.last {
          margin-bottom: 180px;
        }
      }

      .container-header {
        width: 100%;
        padding: 0 10px;
        margin: 10px 0 45px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (min-width: 0) and (max-width: 767px) {
          margin: 35px 0 45px 0;
          flex-flow: row;
          justify-content: space-between;
        }

        @media (min-width: 768px) and (max-width: 991px) {
          margin: 35px 0 45px 0;
          flex-flow: column;
          flex-flow: row;
          justify-content: space-between;
        }

        .bloco-welcome-hide-data {
          background-color: transparent;
          outline: none;
          border: none;
          display: flex;
          justify-content: flex-start;

          &:last-child {
            display: flex;
            justify-content: flex-end;
          }

          @media (min-width: 0) and (max-width: 767px) {
            &:first-child {
              width: 80%;
              max-width: 80%;
              justify-content: flex-start;
            }

            &:last-child {
              width: 20%;
              max-width: 20%;
              justify-content: flex-end;
            }
          }

          @media (min-width: 768px) and (max-width: 991px) {
            &:first-child {
              width: 80%;
              max-width: 80%;
              justify-content: flex-start;
            }

            &:last-child {
              width: 20%;
              max-width: 20%;
              justify-content: flex-end;
            }
          }

          .texto-welcome {
            color: #ffffff;
            font-size: 22px;

            @media (min-width: 0) and (max-width: 767px) {
              padding-right: 20px;
              text-align: left;
            }

            @media (min-width: 768px) and (max-width: 991px) {
              padding-right: 20px;
              text-align: left;
            }
          }

          .circle-icon-hidden-show {
            background: #63dc3f;
            width: 47px;
            height: 47px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .icon-hidden-show {
              max-width: 27px;
              max-height: 21px;
              transition: 0.5s;

              &:hover {
                transform: scale(1.1);
                transition: 0.5s;
              }
            }
          }
        }
      }

      .section-account-history {
        width: 100%;
        max-width: 100%;
        height: 100%;
        min-height: 396px;

        .header-account {
          padding: 0 3px;
          margin-bottom: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 100%;

          @media (min-width: 0) and (max-width: 767px) {
            flex-flow: row wrap;
          }

          @media (min-width: 768px) and (max-width: 991px) {
            flex-flow: row wrap;
          }

          .title-account-history {
            width: 50%;
            max-width: 50%;
            display: flex;
            margin-top: 15px;
            justify-content: flex-start;
            align-items: flex-start;
            position: relative;

            &:last-child {
              justify-content: flex-end;
              align-items: flex-start;
            }

            @media (min-width: 0) and (max-width: 767px) {
              width: 100%;
              max-width: 100%;

              &:last-child {
                margin-top: 40px;
                margin-bottom: 10px;
                justify-content: center;
                align-items: center;
              }
            }

            @media (min-width: 768px) and (max-width: 991px) {
              width: 100%;
              max-width: 100%;

              &:last-child {
                margin-top: 40px;
                margin-bottom: 10px;
                justify-content: center;
                align-items: center;
              }
            }

            .title-historic-account {
              display: flex;
              align-items: center;

              .text-historic-account {
                color: #9b9b9b;
                font-size: 18px;
                font-weight: 400;
                text-align: left;
                margin-left: 20px;
              }

              .text-months {
                padding: 0 10px;
                color: #9b9b9b;
                font-size: 18px;
                font-weight: 400;
                text-align: center;
                width: 130px;
                max-width: 130px;
              }

              .account-icon-coin {
                max-width: 38px;
                width: 100%;
              }
            }
          }

          .text-historic-account-empty {
            margin-top: 20px;
          }
        }
      }
    }
  }
`;
