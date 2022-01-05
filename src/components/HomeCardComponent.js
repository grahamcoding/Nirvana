import React  from 'react';
import {Card, CardGroup, CardImg} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function HomeCardComponent({services}) {
    return (     
         <div className="container py-5">
            <div className="row align-items-center justify-content-between bg-light">
                <div className="col-md p-5">
                        <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={services.image} />
                            <Card.Body>
                            <Card.Title>Swedish Massage</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
         </div>
        )
}

export default HomeCardComponent