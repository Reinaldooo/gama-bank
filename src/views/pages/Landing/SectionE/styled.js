import styled from "styled-components";

export const ContainerE = styled.div`
  background-color: #eaeaea;
  width: 96%;
  height: 840px;
  padding: 40px;
  color: #212529;
  font-size: 1.5rem;
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

  @media screen and (min-width: 0) and (max-width: 991px) {
    padding: 20px 40px;
    text-align: center;
    display: block;
    font-size: 1.2rem;

    img {
      width: 100%;
    }

    .direita h1 {
      font-size: 1rem;
    }
  }
`;
