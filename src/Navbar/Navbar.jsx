import React, { Component } from 'react'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() {
        const navbarHandler = () => {
            this.setState({
              isNavbarOpen: !this.state.isNavbarOpen,
            });
          }

        return (  
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </nav>
        );
    }
}
 
export default Nav;