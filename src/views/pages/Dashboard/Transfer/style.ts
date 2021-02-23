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
    form{
        padding: 12px;
            input{
                display: initial;
                border: none;
                font-size: 16px;
                padding: 8px;
                font-weight: 300;
                text-align:left;
                width: 90%;
                margin: 25px;
                border-bottom: 2px solid #666;
                transition: 0.5s;
                    &:focus{
                        border-bottom: 3px solid #8C52E5;
                    }
            }

            h3{
                margin-left: 30px;
                margin-top: 15px;
            }
    }

`