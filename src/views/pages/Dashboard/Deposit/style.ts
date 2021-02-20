import styled from 'styled-components';


export const Container = styled.div`

    background: white;
    height: 50vh;
    width: 50vw;
    border-radius: 15px;
    display: flex;
    flex-direction: column;

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
            }
    }

`