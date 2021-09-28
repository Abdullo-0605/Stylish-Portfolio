import styled from "styled-components";

export const MapStart = styled.div`
    margin-bottom: 80px;
    text-align: center;
    iframe{
        width: 100vw;
        height: 550px;
    }
    p{
        margin-top: 70px;
        color: gray;
        margin-left: 20px;
        font-size: 13px;
    }
`;

export const MapImages = styled.div`
    display: flex;
    padding-top: 100px;
    justify-content: center;
`;


export const MapBg = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #1d809f;
    margin-left: 20px;
    img{
        width: 40%;
        height: 40%;
        padding: 20px 0 20px 2px;
    }
`; 