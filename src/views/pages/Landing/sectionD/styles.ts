import styled from "styled-components";
import img from '../../../../assets/picture-section-d.jpg'

export const Section = styled.section `
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    display: block;
    float: left;
    
    .container {
        min-height: 100vh;
       
        .img-paralax{
            background-image: url(${img});
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 100vh;


            .description{
                background-color: #65f054b5;
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100vh;
                color: #FFFF;
        
                h1 {
                    font-size: 69px;
                    margin-bottom: 2%;
                    margin-left: 5%;

                    @media (min-width: 0) and (max-width: 767px) {
                        font-size: 34px;
                        text-align: center;
                        margin-left: 0;
                        padding: 0 20px;
                    }

                    @media (min-width: 768px) and (max-width: 991px) {
                        text-align: center;
                        margin-left: 0;
                        padding: 0 20px;
                    }
                }
        
                h6 {
                    font-weight: 200;
                    font-size: 23px;
                    width: 28%;
                    margin: 0;
                    margin-left: 5%;

                    @media (min-width: 0) and (max-width: 767px) {
                        text-align: center;
                        width: auto;
                        margin-left: 0;
                        padding: 0 20px;
                    }

                    @media (min-width: 768px) and (max-width: 991px) {
                        text-align: center;
                        width: auto;
                        margin-left: 0;
                        padding: 0 20px;
                    }
                }
            }
        }
    
}



`