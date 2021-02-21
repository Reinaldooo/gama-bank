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
        justify-content: center;
        align-items: center;

        @media (min-width: 0) and (max-width: 767px) {
          margin: 35px 0 45px 0;
          flex-flow: column;
        }

        @media (min-width: 768px) and (max-width: 991px) {
          margin: 35px 0 45px 0;
          flex-flow: column;
        }

        .bloco-welcome-hide-data {
          width: 50%;
          max-width: 50%;
          display: flex;
          justify-content: flex-start;

          &:last-of-type {
            display: flex;
            justify-content: flex-end;
          }

          .texto-welcome {
            color: #FFFFFF;
            font-size: 22px;

            @media (min-width: 0) and (max-width: 767px) {
              margin-bottom: 20px;
            }

            @media (min-width: 768px) and (max-width: 991px) {
              margin-bottom: 20px;
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


          @media (min-width: 0) and (max-width: 767px) {
            width: 100%;
            max-width: 100%;
            justify-content: center;

            &:last-of-type {
              display: flex;
              justify-content: center;
            }
          }

          @media (min-width: 768px) and (max-width: 991px) {
            width: 100%;
            max-width: 100%;
            justify-content: center;

            &:last-of-type {
              display: flex;
              justify-content: center;
            }
          }
        }
      }

      .section-account {
        width: 100%;
        max-width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-around;

        .title-account {
          display: flex;
          flex-flow: row;
          justify-content: flex-start;
          align-items: center;

          .text-title-account {
            color: #9B9B9B;
            font-size: 18px;
            font-weight: 400;
            text-align: left;
            margin-left: 20px;
          }

          .account-icon-coin {
            max-width: 38px;
            width: 100%;
          }

          .account-icon-card {
            max-width: 43px;
            width: 100%;
          }
        }

        .balance-account {
          margin-top: 35px;

          .balance-title {
            font-size: 18px;
            font-weight: 400;
            color: #9B9B9B;
          }

          .balance-number {
            margin-top: 5px;
            font-size: 30px;
            font-weight: 700;
            line-height: 35px;
            color: #010101;

            &__blue {
              font-size: 30px;
              font-weight: 700;
              line-height: 35px;
              color: #1783E7;
            }
          }
        }

        .transaction-account {
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          @media (min-width: 0) and (max-width: 767px) {
            flex-flow: column wrap;
            align-items: flex-start;
            justify-content: flex-start;
          }

          .transaction-title {
            font-size: 18px;
            font-weight: 400;
            color: #9B9B9B;
          }

          .transaction-value {
            font-size: 30px;
            font-weight: 700;
            color: #68DE5A;
          }
        }
      }

      .section-account-history {
        width: 100%;
        max-width: 100%;
        height: 100%;

        .title-account-history {
          width: 100%;
          max-width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          .title-historic-account {
            display: flex;
            flex-flow: row;
            justify-content: flex-start;
            align-items: center;

            .text-historic-account {
              color: #9B9B9B;
              font-size: 18px;
              font-weight: 400;
              text-align: left;
              margin-left: 20px;
            }

            .account-icon-coin {
              max-width: 38px;
              width: 100%;
            }
          }
        }

        .extract-account-history {
          width: 100%;
          max-width: 100%;
          margin-top: 45px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          .title-historic-account {
            display: flex;
            flex-flow: row;
            justify-content: flex-start;
            align-items: center;

            .text-historic-account {
              color: #9B9B9B;
              font-size: 18px;
              font-weight: 400;
              text-align: left;
              margin-left: 20px;
            }

            .account-icon-coin {
              max-width: 38px;
              width: 100%;
            }
          }
          
          .row-historic-account {
            width: 100%;
            max-width: 100%;
            display: flex;
            justify-content: space-between;
            
            .column-icon {
              width: 100%;
              max-width: 34px;

              @media (min-width: 0) and (max-width: 767px) {
                display: none;
              }

              @media (min-width: 768px) and (max-width: 991px) {
                display: none;
              }
              
              .account-icon-history-card {
                width: 100%;
                max-width: 34px;
              }
            }
            .column-description {
              width: 100%;
              max-width: 724px;

              @media (min-width: 992px) and (max-width: 1199px) {
                margin-left: 22px;
              }

              .historic-text {
                font-size: 16px;
                font-weight: 700;
                color: #000000;

                @media (min-width: 0) and (max-width: 767px) {
                  font-size: 14px;
                }
              }

              .description-text {
                margin-top: 5px;
                font-size: 18px;
                font-weight: 400;
                color: #9B9B9B;

                @media (min-width: 0) and (max-width: 767px) {
                  font-size: 16px;
                }
              }

              .value-text {
                margin-top: 13px;
                font-size: 20px;
                font-weight: 500;
                color: #000000;

                @media (min-width: 0) and (max-width: 767px) {
                  font-size: 18px;
                }
              }
            }

            .column-date {
              width: 100%;
              max-width: 76px;

              @media (min-width: 0) and (max-width: 767px) {
                padding-top: 1px;
                max-width: 76px;
              }
              
              .date-text {
                font-size: 12px;
                font-weight: 400;
                color: #9B9B9B;
              }
            }
          }
        }
      }
    }
  }
}
`