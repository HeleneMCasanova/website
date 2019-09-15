import React , { Component } from 'react';
import LeftPanel from '../Home/LeftPanel.js';
import { SocialIcon } from 'react-social-icons';

import './contact.css';

class Contact extends Component {
    render = () => {
        return (
            <div>
                <LeftPanel />

                <br></br><br></br>

                <div className = "right-panel">
                    <p id = "contact-title-text">Contact Me</p>
                    <div style = {{textAlign:"center"}}>

                        <SocialIcon style = {{marginRight:"3%"}} url = "https://github.com/HeleneMCasanova" />

                        <SocialIcon style = {{marginRight:"3%"}} url = "https://www.linkedin.com/in/helenecasanova/" />

                        <SocialIcon style = {{marginRight:"3%"}} url = "https://www.pinterest.com/helenemcasanova/" />

                        <SocialIcon style = {{marginRight:"3%"}} url = "https://twitter.com/helene_casanova" />

                        <p style = {{marginTop:"2%"}}> Email: helenemariecasanova@gmail.com</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;