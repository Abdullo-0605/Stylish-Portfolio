import styled from "styled-components";
import bgstart from "../bg-start.jpg"

export const ScrollButton = styled.button`
    position: fixed;
    right: 15px;
    bottom: 15px;
    width: 50px;
    height: 50px;
    text-align: center;
    color: #fff;
    background: rgba(52, 58, 64, 0.5);
    line-height: 45px;
    border: none;
    border-radius: 5px;
    img{
        width: 35%;
        height: 35%;
    }
`;

export const BgStart = styled.div`
    background-image: url(${bgstart});
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding-top: 0;
    *{
        box-sizing: border-box;
    }
`;

export const BgImage = styled.div`
    margin: auto;
    text-align: center;
    
    button{
        background-color: #1d809f;
        color: white;
        border: none;
        font-size: 17px;
        padding: 25px;
        width: 180px;
        border-radius: 5px;
    }
`;

export const BgTitle = styled.p`
    font-size: 85px;
    font-weight: bolder;
    padding-top: 250px;
    margin-bottom: 0px;
`;

export const BgText = styled.p`
    font-style: italic;
    font-weight: bold;
    font-size: 27px;
    margin-bottom: 55px;
`;
