import React, { Component } from 'react'
import { WelcomeStart } from './welcome';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <WelcomeStart>
                <p>Welcome to <i>your</i> next website!</p>
                <button>Download Now!</button>
            </WelcomeStart>
        );
    }
}
 
export default Welcome;