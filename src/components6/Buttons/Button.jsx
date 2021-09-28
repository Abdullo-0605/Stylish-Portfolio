import React, { Component } from 'react'
import { ButtonStart, Button1, Button2 } from './button';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <ButtonStart>
                <p>The buttons below are impossible to resist...</p>
                <Button1>Click Me!</Button1>
                <Button2>Look at Me!</Button2>
            </ButtonStart>
        );
    }
}
 
export default Button;