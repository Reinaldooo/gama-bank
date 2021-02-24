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

  .form-deposit {
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    form {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 100%;
      padding: 0 0 20px;

      h3 {
        margin-left: 30px;
        margin-top: 15px;
      }
    }
  }

`