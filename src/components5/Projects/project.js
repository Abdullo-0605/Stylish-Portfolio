import styled from "styled-components";
import portfolio1 from "../portfolio-1.jpg"
import portfolio2 from "../portfolio-2.jpg"
import portfolio3 from "../portfolio-3.jpg"
import portfolio4 from "../portfolio-4.jpg"


export const ProjectStart = styled.div`
    width: 100vw;
`;

export const ProjectTitle = styled.p`
    color: #ecb807;
    padding-top: 120px;
    padding-bottom: 0%;
    font-weight: bold;
    font-size: 17px;
    text-align: center;
`;

export const ProjectHead = styled.p`
    font-weight: bolder;
    font-size: 40px;
    padding-top: 0;
    text-align: center;
`;

export const Portfolios = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 150px 90px 150px;
    margin: auto;
`;

export const PortfoliosBg1 = styled.div`
    width: 49%;
    height: 400px;
    background-image: url(${portfolio1});
    text-align: unset;
`;

export const PortfoliosBg2 = styled.div`
    width: 49%;
    height: 400px;
    background-image: url(${portfolio2});
    text-align: unset;
`;

export const PortfoliosBg3 = styled.div`
    width: 49%;
    height: 400px;
    background-image: url(${portfolio3});
    text-align: unset;
`;

export const PortfoliosBg4 = styled.div`
    width: 49%;
    height: 400px;
    background-image: url(${portfolio4});
    text-align: unset;
`;

export const PortfoliosTitle = styled.p`
    color: white;
    padding-left:70px;
    padding-top: 260px;
    font-weight: bold;
    font-size: 13px;
`;

export const PortfoliosText = styled.p`
    color: white;
    color: #BCD9E2;
    font-size: 18px;
    padding-left: 70px;
    padding-right: 70px;
`;

