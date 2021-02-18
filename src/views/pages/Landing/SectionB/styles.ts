import styled from "styled-components";

export const ContainerSection = styled.section`
    min-height: 100vh;
    width: 100%;
    padding: 1rem;
    background-color:#EAEAEA;
    padding: 1.5rem 0;   
        
    img {
        max-width: 100%;
    }
`

export const ContainerContent = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    
    h2, h3 {
        padding-left: 5.625rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.25rem;
    }
    
    @media screen and (max-width: 991px) {
        flex-direction: column;
        
        h2, h3 {
            padding: 0;
            text-align: center
        }
    }
`

export const DarkPart = styled.section`
    width: 50%;
    padding: 3rem 0;
    background-color: #000;
    color: #68DE5A;
    
        & img {
            margin-left: auto;
        }

    @media screen and (max-width: 991px) {
        width: 100%;
    }          
`

export const LightPart = styled.section`
    width: 50%;
    padding: 3rem 0;
    background-color: #f8f8f8;
    color: #1D1D1D;

     
    & div {
        display: flex;
        justify-content: center;
        margin: 3rem;
    }

    @media screen and (max-width: 991px) {
        width: 100%;
    }
`