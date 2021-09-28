import React, { Component } from 'react'
import { ProjectStart, ProjectTitle, ProjectHead, Portfolios, PortfoliosBg1, PortfoliosBg2, PortfoliosBg3, PortfoliosBg4, PortfoliosTitle, PortfoliosText } from './project';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <ProjectStart>
                
                <ProjectTitle>PORTFOLIO</ProjectTitle>
                <ProjectHead>Recent Projects</ProjectHead>

                <Portfolios>
                    <PortfoliosBg1>
                        <PortfoliosTitle>STATIONARY</PortfoliosTitle>
                        <PortfoliosText>A yellow pencil with envelopes on a clean, blue backdrop!...</PortfoliosText>
                    </PortfoliosBg1>
                    <PortfoliosBg2>
                        <PortfoliosTitle>ICE CREAM</PortfoliosTitle>
                        <PortfoliosText>A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!...</PortfoliosText>
                    </PortfoliosBg2>
                    <PortfoliosBg3>
                        <PortfoliosTitle>STRAWBERRIES</PortfoliosTitle>
                        <PortfoliosText>Strawberries are such a tasty snack, especially with a little sugar on top!...</PortfoliosText>
                    </PortfoliosBg3>
                    <PortfoliosBg4>
                        <PortfoliosTitle>WORKSPACE</PortfoliosTitle>
                        <PortfoliosText>A yellow workspace with some scissors, pencils, and other objects....</PortfoliosText>
                    </PortfoliosBg4>
                </Portfolios>

            </ProjectStart>
        );
    }
}
 
export default Project;