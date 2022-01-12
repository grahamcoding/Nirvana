import React  from 'react';
import {Card, CardGroup, Collapse, Button, Accordion} from 'react-bootstrap'
import { Fade } from 'react-animation-components'

function RenderServicesItem({services}) {
    return (
        <Card>
            <Card.Img variant="top" src={services.image} alt={services.name} />
                <Card.Body>
                    <Card.Title>{services.name}</Card.Title>
                    <Card.Text>
                    {services.description}
                    </Card.Text>
                </Card.Body>
        </Card>
    );
}

function CancelPolicyCollapse() {

 return (
<Accordion defaultActiveKey={['0']} alwaysOpen > 
  <Accordion.Item eventKey="0" >
    <Accordion.Header><h2 >Rates</h2></Accordion.Header>
    <Accordion.Body>
        <p className='lead'>Rates are for all services in office.</p>
     <ul className='lead'>
         <li>$60.00 for 60 Minutes</li>
         <li>$80.00 for 80 Minutes</li>
         <li>$100.00 for 120 Minutes</li>
     </ul>
        <p className='lead'>I can come to you! Add $20.00 per service for in home rate.</p>
        <p className='lead'>Gift certificates are also available in any amount!</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><h5>Cancellation Policy</h5></Accordion.Header>
    <Accordion.Body>
        <p className='lead'>I understand that the unexpected in life can happen, but to be fair to all clients looking for services, please note the following:</p>
        <ul>
        <li className='pb-2'><em>At least 24-hour advance notice is required when cancelling.</em> If you are not able to do so, you will be charged a one time fee of a single 60 minute session on top of your normal rate for your next session.</li>
        <li className='pb-2'><em>"No-Show" or no notice missed appointments</em> will be charged for the entire missed session on the next appointment.</li>
        <li className='pb-2'><em>Late to appointment</em> will be honored for the remaining time but will be charged the full rate.</li>
        <li ><em>Frequent violations</em> of the cancellation policy can lead to refusal of service.</li>
        </ul>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
 )

}


function Services(props) {
   
    /*services maps the props object into the RenderServices item to display the items as defined in the above template */
    
    const services = props.services.map(services => {
        return (
            <div key={services.id} className="col-md-5 m-1">
                <RenderServicesItem services={services} />
            </div>
        );
    });
   
    return (
    <>
      <div className="container py-5">
         <div className="row align-items-center justify-content-between bg-light p-5">
             <div className="col-md">
                <Fade in>
                <CardGroup className="justify-content-center">
                 {services}
               </CardGroup>
                </Fade>
           </div>
        </div>
      </div>

      <div className="container pb-5">
             <div className="row align-items-center justify-content-between bg-light">
             <div className="col-md p-5">
            <CancelPolicyCollapse/>
           </div>
        </div>
      </div>
    </>
    );
   }
   
   export default Services;