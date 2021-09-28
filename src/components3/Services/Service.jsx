import React, { Component } from 'react'
import { ServiceStart, ServicesTitle, ServicesText, ServicesImages, ImagesBg, ServicesPhotos, ImagesText, ImagesTitle } from './service';

import iPhone from "../Iphone.svg" 
import pencil from "../pencil.svg" 
import like from "../like.svg" 
import muylab from "../muylab.svg" 


class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <ServiceStart>
                <ServicesTitle>SERVICES</ServicesTitle>
                <ServicesText>What We Offer</ServicesText>
                <ServicesImages>
                    <ImagesBg>
                        <ServicesPhotos src={iPhone} alt="" />
                        <ImagesTitle>Responsive</ImagesTitle>
                        <ImagesText>Looks great on any screen size!</ImagesText>
                    </ImagesBg>
                    <ImagesBg>
                        <ServicesPhotos src={pencil} alt="" />
                        <ImagesTitle>Redesigned</ImagesTitle>
                        <ImagesText>Freshly redesigned for Bootstrap 5.</ImagesText>
                    </ImagesBg>
                    <ImagesBg>
                        <ServicesPhotos src={like} alt="" />
                        <ImagesTitle>Favorited</ImagesTitle>
                        <ImagesText>Millions of users  Start Bootstrap!</ImagesText>
                    </ImagesBg>
                    <ImagesBg>
                        <ServicesPhotos src={muylab} alt="" />
                        <ImagesTitle>Question</ImagesTitle>
                        <ImagesText>I mustache you a question...</ImagesText>
                    </ImagesBg>
                </ServicesImages>
            </ServiceStart>
            
        );
    }
}
 
export default Service;