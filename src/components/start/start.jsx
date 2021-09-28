import React, { Component } from 'react'
import { BgImage, BgText, BgTitle, BgStart, ScrollButton } from './style.js';
import scroll from "../scroll.svg"

class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <BgStart>
                <BgImage>
                    <BgTitle>Stylish Portfolio</BgTitle>
                    <BgText>A free Bootstrap Theme by Start Bootstrap</BgText>
                    <button>Find Out More</button>
                </BgImage>
                <ScrollButton onClick={() => window.scroll({ top: 0, behavior: "smooth" })}><img src={scroll} alt="" /></ScrollButton>
            </BgStart>
        );
    }
}
 
export default Start;