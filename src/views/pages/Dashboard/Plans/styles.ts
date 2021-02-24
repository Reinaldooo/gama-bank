import styled from 'styled-components';

export const Header = styled.header `
    a{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #FFFF;
        transition: color 0.2s;
        &:hover{
            color:  #63dc3f;
        }
        svg{
            margin-right: 4px;
        }
    }
`

export const Container = styled.div`

  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;

  div.card{
    border: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: silver;
    width: 50%;
    height: 14vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div.text{
        text-align: justify;
    }

    h5,h6,p{
        padding: 5px;
    }
  }


`