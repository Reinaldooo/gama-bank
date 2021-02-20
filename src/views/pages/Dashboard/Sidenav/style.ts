import styled from "styled-components";

export const Container = styled.div`

  position: fixed;
  left: 0;
  background: #63dc3f;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 160px;
  align-items: center;
  z-index: 2;

  @media (min-width: 0) and (max-width: 767px) {
    left: 0;
    bottom: 0;
    height: 120px;
    width: 100vw;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    left: 0;
    bottom: 0;
    height: 120px;
    width: 100vw;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .logo-gama-bank {
    width: 100%;
    max-width: 125px;
    margin-top: 20px;
    transition: 0.8s;
    
    &:hover {
      transition: 0.8s;
      transform: scale(1.05);
    }

    @media (min-width: 0) and (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      display: none;
    }
  }

  .menu-option {
    width: 100px;
    height: 100px;
    background-color: #8C52E5;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    color: white;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    transition: 0.8s;
    
    &:hover {
      background: #7219e9;
      transition: 0.8s;
    }

    @media (min-width: 0) and (max-width: 767px) {
      margin-bottom: 0;
      width: 75px;
      height: 75px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      margin-bottom: 0;
      width: 100px;
      height: 100px;
    }

    p {
      font-size: 14px;
      font-weight: 500;

      @media (min-width: 0) and (max-width: 767px) {
        margin-bottom: 0;
        font-size: 11px;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        margin-bottom: 0;
        font-size: 14px;
      }
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
      transition: 0.8s;
      
      &:hover {
        .pix {
          transition: 0.8s;
          transform: rotate(180deg);
        }
      }

      .pix {
        margin-left: 5px;
        width: 28px;
        height: 28px;
        transition: 0.8s;

        @media (min-width: 0) and (max-width: 767px) {
          margin-left: 0;
        }

        @media (min-width: 768px) and (max-width: 991px) {
          margin-left: 0;
        }
      }

      @media (min-width: 0) and (max-width: 767px) {
        align-items: center;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        align-items: center;
      }
    }

    &:first-of-type {
      margin-top: 45px;

      @media (min-width: 0) and (max-width: 767px) {
        margin-top: 0;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        margin-top: 0;
      }
    }
  }




`