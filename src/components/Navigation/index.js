import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';

class Navigation extends Component {

    render = () => {
        return (
            <div id = "nav-bar">
                <div style = {{textAlign:"center"}}>
                    <Link to = {'/'}>Home </Link>//
                    <Link to = {'portfolio'}> Portfolio </Link>//
                    <Link to = {'contact'}> Contact </Link>
                </div>
            </div>
        );
    }
}

export default Navigation;