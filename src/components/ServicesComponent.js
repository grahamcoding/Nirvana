import React  from 'react';
import {Card, CardGroup, CardImg} from 'react-bootstrap'

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
         <div className="row align-items-center justify-content-between bg-light">
             <div className="col-md">
             <CardGroup className="justify-content-center">
                {services}
            </CardGroup>
           </div>
        </div>
      </div>
      </>
    );
   }
   
   export default Services;