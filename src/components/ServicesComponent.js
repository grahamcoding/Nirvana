import React  from 'react';
import {Card, CardGroup, CardImg} from 'react-bootstrap'

const Services = () => {
    return (
        <>
      <div className="container py-5">
             <div className="row align-items-center justify-content-between bg-light">
             <div className="col-md p-5">
             <CardGroup>
                <Card>
                    <Card.Img variant="top" src="/assets/images/swedishcard.jpg" />
                    <Card.Body>
                    <Card.Title>Swedish Massage</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/assets/images/deepcard.jpg" />
                    <Card.Body>
                    <Card.Title>Deep Tissue Massage</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/assets/images/stonecard.jpg" />
                    <Card.Body>
                    <Card.Title>Hot Stone</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/assets/images/reikicard.jpeg" />
                    <Card.Body>
                    <Card.Title>Reike</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
           </div>
        </div>
      </div>
      </>
    )
   };
   
   export default Services;