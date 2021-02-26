import styled from "styled-components";

export const ContainerE = styled.div`
  background-color: #eaeaea;
  color: #212529;
  width: 100%;
  height: 100vh;
  float: left;
  padding: 3% 4%;
  font-size: 1rem;
  font-weight: 400px;
  line-height: 1.5;  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
 

  .LeftContent {
    width: 50%;
    display: inline;
    flex-wrap: wrap;
    align-self: center;
    text-align: left;
  }

  .RigthContent {
    color: blue;
    width: 50%;
    align-self: center;
  }

  
  @media screen and (max-width: 767px) {
    
    display: block;
    text-align: center;    
    align-self: center;
    
    
    img {
      width: 100%;
      margin-top: 3rem;
      position: relative;     
      top:50%;
      left:50%;      
    }

    .text {      
      padding: 0 2rem;
    }

    h1 {
      
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 1024px) {    
    display: block;
       
     
    
    img {  
      margin-top: 3rem;
      position: relative;     
      top:50%;
      left:50%;      
    }

    .text {      
      padding: 0 2rem;
    }

    h1 {
      
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;


