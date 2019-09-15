import React, { Component } from 'react';
import LeftPanel from './LeftPanel.js';
import RightPanel from './RightPanel.js';

class Home extends Component {
    render = () => {
        return(
            <div>
                <LeftPanel />
                <br></br><br></br>
                <RightPanel />
            </div>
        )
    };
}

export default Home;