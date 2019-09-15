import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import Navigation from '../Navigation';
import Home from '../Home';
import Work from '../Work';
import Contact from '../Contact';

class App extends Component {

    render = () => {
        return (
            <HashRouter>
                <Navigation />

                <Route exact path='/' component={Home} />
                <Route exact path='/portfolio' component={Work} />
                <Route exact path='/contact' component={Contact} />
            </HashRouter>
        );
    }
}

export default App;