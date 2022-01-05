import React, { Component } from 'react';
import NavigationComponent from './NavigationComponent';
import HeaderComponent from './HeaderComponent';
import Home from './HomeComponent';
import {SERVICES} from '../shared/services'

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES
        };
    }

render (){

    return(
        <div>
            <NavigationComponent/>
            <HeaderComponent/>
            <Home services={this.state.services}/>
        </div>
    )
}

}

export default MainComponent;
