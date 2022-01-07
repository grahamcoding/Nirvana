import React  from 'react';
import NavigationComponent from './NavigationComponent';
import HeaderComponent from './HeaderComponent';
import Home from './HomeComponent';

const MainComponent = () => {
    return(
        <div>
            <NavigationComponent/>
            <HeaderComponent/>
            <Home/>
        </div>
    )
}

export default MainComponent;
