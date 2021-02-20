import styled, {css} from "styled-components";

export const Container = styled.div `

    background: #63dc3f;
    flex-direction: column;
    height: 100vh;
    width: 100%;

  
    .div-menu{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        img{
            width: 7vw;
            height: 14vh;
            margin-bottom: 15px;
        }

    }

    .menu-option{
        width: 70%;
        height: 15vh;
        background-color: #8C52E5;
        margin-bottom: 40px;
        display:flex;
        flex-direction: column;
        color: white;
        border-radius: 6px;
        justify-content: inherit;

        p{
            font-size: 1vw;
            margin-left: 8px
            
        }

        .pix{
            width: 28%;
            height: 50%;
            margin-left: 10px;

        }
        a {
            text-decoration: none;
            display: flex;
            flex-direction: column;
            color: white
        } 
    }


  

`