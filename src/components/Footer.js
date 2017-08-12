import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, Row, Col, Container } from 'reactstrap';
 import cv from '../experiences.json'; 


const Footer = (props) => {
  return (
    <div>
      <div className="footer">
     <Container>
     <Row>
      <Col xs="12" md="4"> 
        copyright www.nikolicdejan.com
      </Col>
      <Col xs="12" md="4"> 

      </Col>
      <Col xs="12" md="4"> 

      </Col>
     </Row>

     </Container>
     </div>
    </div>
  );
};

export default Footer;