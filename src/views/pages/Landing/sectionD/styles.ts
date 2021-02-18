import styled from "styled-components";

export const Section = styled.section `
.section-d{
    height: 100vh;
    width: 100%;
    margin: 0;
}

.background-img-paralax{
    background-image: url(../../../assets/picture-section-d.jpg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}

.background-color{
    height: 100%;
    background-color: #65f054b5;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.title{
    font-size: 69px;
    margin-bottom: 2%;
}

.description{
    font-weight: 200;
    font-size: 23px;
    width: 28%;
    margin: 0;
}

.text{
    margin-left: 5%;
    color: #FFFFFF;
}
`