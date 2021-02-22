import styled from "styled-components";

export const SummaryCardsDashboard = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  
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
`;