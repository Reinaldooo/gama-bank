import styled from "styled-components";

export const ContainerDashboard = styled.div `
  padding-left: 160px;
  max-width: 100vw;
  width: 100vw;
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
    
    .cards-row {
      width: 100%;
      max-width: 1000px;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;

      &:last-of-type {
        margin-top: 50px;
      }
      
      .container-header {
        width: 100%;
        padding: 0 10px;
        margin: 35px 0 45px 0;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (min-width: 0) and (max-width: 767px) {
          flex-flow: column;
        }

        @media (min-width: 768px) and (max-width: 991px) {
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
            font-weight: 900;
            font-size: 22px;

            @media (min-width: 0) and (max-width: 767px) {
              margin-bottom: 20px;
            }

            @media (min-width: 768px) and (max-width: 991px) {
              margin-bottom: 20px;
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

      @media (min-width: 0) and (max-width: 767px) {
        max-width: 100%;
        display: block;
        
        &:last-of-type {
          margin-top: 0 !important;
        }
      }

      @media (min-width: 768px) and (max-width: 991px) {
        max-width: 100%;
        display: block;

        &:last-of-type {
          margin-top: 0 !important;
        }
      }
      
      
    }
  }
`