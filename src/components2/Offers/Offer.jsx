import React, { Component } from 'react'
import { OffersStart, OffersTitle, OffersText } from './offer';

class Offer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <OffersStart>
                <OffersTitle>Stylish Portfolio is the perfect theme for your next project!</OffersTitle>
                <OffersText>This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at Unsplash !</OffersText>
                <button>What We Offer</button>
            </OffersStart>
        );
    }
}
 
export default Offer;