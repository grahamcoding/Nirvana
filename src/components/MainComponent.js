import React, {Component}  from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/*Imported Created Components*/

import NavigationComponent from './NavigationComponent';
import HeaderComponent from './HeaderComponent';
import Home from './HomeComponent';
import Services from './ServicesComponent';
import Footer from './FooterComponent';
import About from './AboutComponent'
import { SERVICES } from '../shared/services';




class Main extends Component {

    /* Pulls objects lists js from shared to be passed down to children */

    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES
        };
    }

    render() {

    /*Page layout and page routing
    
    Components outside of Switch are permanent, displayed and not reloaded per page.

    Components with render are passed props from this parent to the child to be used in that component.
    */

        return(
            <div>
                <NavigationComponent/>
                <HeaderComponent/>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/home' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path="/services" render={() => <Services services={this.state.services} />} />
                    </Switch>
                <Footer/>
            </div>
        )

    }
}

export default Main;
