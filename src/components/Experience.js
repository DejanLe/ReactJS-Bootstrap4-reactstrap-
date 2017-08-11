import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import cv from '../cv.json'; 

import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
	
export default class Experience extends React.Component {

  render() {

    return (
      <div className="experience">
      <h3 className="skills-about-projects">{ this.props.item.about_title }</h3>
      <Row>
        <Col xs="12" md="12"> 

         <Card> 
            <div className="text-center">
              <h3 className="skills-about-projects">{ this.props.item.title }</h3> 
            	  <p>{ this.props.item.period }</p>
                <p>{ this.props.item.company }</p> 
            </div>
         </Card>
       </Col>
       </Row> 
       </div>
    );
  }
}