import React  from 'react';
import { Fade } from 'react-animation-components'

const About = () => {
    return (
        <Fade in>
         <div className="container py-5">
             <div className="row align-items-center justify-content-between bg-light">
             <div className="google-map-code col-xl-5 col-lg-6 ps-5 py-5">
          <iframe src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s700+Cedar+Street+Alexandria+MN!6i15" width="400" height="400" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
             <div className="col-md p-5">
                 <h2 className='Logo'>Nirvana Massage</h2>
                 <p className="lead">
                 Owned and operated by Kandi Harapat
                 </p>
                 <p className='lead'>
                  Phone: 320-492-3892
                 </p>
                 <p className='lead'>
                  Hours - by appointment only.
                 </p>
                  <p className='lead'>
                  Office Address: <br/>
                  700 Cedar Street, Suite 267, Alexandria MN 56308
                  </p>
           </div>
        </div>
      </div>
      </Fade>
    )
   };
   
   export default About;