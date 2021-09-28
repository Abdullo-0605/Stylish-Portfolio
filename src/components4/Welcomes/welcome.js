import styled from "styled-components";
import welcomeBg from "../bg-welcome.jpg"

export const WelcomeStart = styled.div`
    background-image: url(${welcomeBg});
    width: 100vw;
    height: 730px;
    /* background-color: gold; */
    text-align: center;
    p{
        margin: auto;
        width: 450px;
        font-size: 53px;
        font-weight: 900;
        padding-top: 250px;
    }
    button{
        background-color: #1d809f;
        color: white;
        border: none;
        font-size: 17px;
        padding: 25px;
        width: 180px;
        border-radius: 5px;
        margin-top: 50px;

    }
`;