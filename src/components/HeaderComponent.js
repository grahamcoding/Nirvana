import React  from 'react';
import { Fade } from 'react-animation-components'

const Header = () => {
 return (
    <div className="p-5 text-center bg-image Jumbotron">
      <div>
        <div className="d-flex justify-content-left align-items-center">
          <div className="text-white p-5 m-5">
          <Fade in>
          <h4 className="Mask p-4 m-3">Create a life you don't need a vacation from.</h4>
          </Fade>
          </div>
        </div>
      </div>
    </div>
 )
};

export default Header;