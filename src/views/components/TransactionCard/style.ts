import styled from "styled-components";
import { mainPurple } from "../../../styles";

export const Container = styled.div<{ isCredit: boolean }>`
    &:last-of-type {
        padding-bottom: 20px;
    }
    .extract-account-history {
        width: 100%;
        max-width: 100%;
        margin-top: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-flow: row wrap;
        position: relative;

        .title-historic-account {
            display: flex;
            flex-flow: row;
            justify-content: flex-start;
            align-items: center;

            .text-historic-account {
                color: #9b9b9b;
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

            & + div {
                padding-top: 25px;
            }

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
                    color: #9b9b9b;

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

                    &--negative {
                        color: lightcoral;
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
                    font-size: 11px;
                    font-weight: 400;
                    color: #9b9b9b;
                }
            }
        }
    }
`;

export const CreditBadge = styled.div`
    position: absolute;
    right: 0px;
    top: 25px;
    padding: 5px 10px;
    border-radius: 10px;
    color: white;
    background-color: ${mainPurple};
`;
