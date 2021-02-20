import styled from "styled-components";

export const Container = styled.div `

    position: fixed;
    left: 0;
    background: #63dc3f;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 160px;
    align-items: center;
  
    .logo-gama-bank {
      width: 100%;
      max-width: 125px;
      margin-top: 20px;
    }

    .menu-option{
        width: 100px;
        height: 100px;
        background-color: #8C52E5;
        margin-bottom: 25px;
        display:flex;
        flex-direction: column;
        color: white;
        border-radius: 6px;
          justify-content: center;
          align-items: center;

        p{
          font-size: 14px;
          font-weight: 500;
        }

        .pix{
            margin-left: 5px;          
            width: 28px;
            height: 28px;
        }
      
        a {
            text-decoration: none;
            display: flex;
            flex-direction: column;
            color: white;
            width: 100%;
            height: 100%;
            justify-content: space-around;
            padding: 5px 7px;
        } 
        
      &:first-of-type {
        margin-top: 45px;
      }
    }


  

`