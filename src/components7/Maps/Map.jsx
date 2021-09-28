import React, { Component } from 'react'
import { MapStart, MapBg, MapImages } from './map';
import facebook from "../facebook.svg"
import twitter from "../twitter.svg"
import github from "../github.svg"



class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <MapStart>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95911.05971916986!2d69.22567679999999!3d41.304064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4167b07139%3A0x9635f7a7ce8bfd02!2z0J_QsNGA0Log0JDQvdGF0L7RgCDQm9C-0LrQvtC80L7RgtC40LI!5e0!3m2!1sru!2s!4v1629895657765!5m2!1sru!2s" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy"></iframe>
                <MapImages>
                    <MapBg>
                        <img src={facebook} alt="" />
                    </MapBg>
                    <MapBg>
                        <img src={twitter} alt="" />
                    </MapBg>
                    <MapBg>
                        <img src={github} alt="" />
                    </MapBg>
                </MapImages>
                <p>Copyright © Your Website 2021</p>
            </MapStart>
        );
    }
}
 
export default Map;