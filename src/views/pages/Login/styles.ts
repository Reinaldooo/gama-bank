import styled from "styled-components";

export const FormLogin = styled.div `
    width: 355px;
     
    form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column wrap;

        .form-links {
            padding-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column wrap;

            a { 
                display:flex;
                padding-top: 10px;
                line-height: 16px;
                font-size: 13px;
                color: #8C52E5;
                text-align: center;
                text-decoration: none;
            }
        }

        .button-login {
            width: 100%;
            background-color: #68DE5A;
            color: #FFFFFF;
            padding: 15px 35px;
            margin-top: 20px;
            border: none;
            border-radius: 30px;
            font-size: 16px;
            transition: background 0.8s;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &:hover {
                background-color: #8C52E5;
            }
            
            svg {
                color: #FFFFFF;
            }
        }
    }
`

