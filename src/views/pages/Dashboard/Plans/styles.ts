import styled from "styled-components";
import { mainPurple } from "../../../../styles";

export const Header = styled.header`
    margin-bottom: 30px;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #ffff;
        transition: color 0.2s;

        &:hover {
            color: #63dc3f;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;

    label {
        display: block;
        margin: 40px 5px 1px;
        color: ${mainPurple};
    }

    select {
        background: #fbfbfb;
        color: #000000;
        height: 40px;
        border: none;
        border-bottom: 2px solid #878686;
        width: 100%;
        font-size: 16px;
        font-weight: 300;

        @media (min-width: 0) and (max-width: 767px) {
            width: 100%;
            max-width: 100%;
        }

        @media (min-width: 768px) and (max-width: 991px) {
            width: 100%;
            max-width: 100%;
        }
    }

    .section-plans {
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-flow: row wrap;

        .card {
            border: 1px solid #949494;
            border-radius: 6px;
            max-width: 170px;
            width: 100%;
            padding: 20px 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 10px 5px 20px;
            position: relative;

            .text {
                text-align: justify;
            }

            p {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                right: -10px;
                top: -10px;
                background-color: ${mainPurple};
                color: white;
                border-radius: 50%;
                height: 30px;
                width: 30px;
                text-align: center;
            }

            h5,
            h6,
            p {
                padding: 5px;
            }
        }
    }
`;
