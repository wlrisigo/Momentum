import React, { Component } from 'react';
import home from './Pages/home'
import {Route,Switch} from 'react-router-dom';
import team from "./Pages/FinalTeam";
import contact from "./Pages/contact";
import services from "./Pages/services"

import "./app.css"



class App extends Component {
    render() {
        const App = () => (

            <div>
                <Switch>
                    <Route exact={true} path={'/'} component={home}/>
                    <Route exact={true} path={'/Home'} component={home}/>
                    <Route exact={true} path={'/services'} component={services}/>
                    <Route exact={true} path={'/OurTeam'} component={team}/>
                    <Route exact={true} path={'/ContactUs'} component={contact}/>
                </Switch>
            </div>
        );
        return (
            <Switch>
                <App/>
            </Switch>
        );
    }
}

export default App;
