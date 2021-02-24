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
            color: #FFFFFF;
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

        .title-account-history {
          width: 100%;
          max-width: 100%;
          display: flex;
          margin-top: 15px;
          justify-content: flex-start;
          align-items: flex-start;

          .title-historic-account {
            display: flex;
            flex-flow: row;
            justify-content: flex-start;
            align-items: center;

            .text-historic-account, .text-historic-account {
              color: #9B9B9B;
              font-size: 18px;
              font-weight: 400;
              text-align: left;
              margin-left: 20px;
            }

            .text-historic-account {
              margin: 40px 20px;
            }

            .account-icon-coin {
              max-width: 38px;
              width: 100%;
            }
          }
        }
      }
    }
  }
`