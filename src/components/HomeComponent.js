import React  from 'react';
import { Fade } from 'react-animation-components'

const Home = () => {
    return (
        <Fade in>
         <div className="container py-5">
             <div className="row align-items-center justify-content-between bg-light">
                  <div className="col-md">
                    <img src='/assets/images/homeimage.jpg' alt="Hot Stone Message" className="img-fluid m-5 pe-5" />
                 </div>
             <div className="col-md p-5">
              <h2>Personalized and local massage services.</h2>
              <p className="lead">
               Nirvana Massage is your local Alexandria area destination and contact for a personalized and complete massage and Reike experience.
               </p>
             </div>
          </div>
        </div>
      </Fade>
    )
   };
   
   export default Home;