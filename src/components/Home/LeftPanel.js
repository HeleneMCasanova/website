import React, { Component } from 'react';

import './home.css';

class LeftPanel extends Component {
    render = () => {
        return(
            <div id = "left-panel">
                <div id = "title-card">
                    <p id = "title-text-left-panel">Helene Casanova</p>
                    <p style = {{textAlign:'center'}} >writer && programmer && author</p>
                </div>

            </div>
        )
    };
}

export default LeftPanel;