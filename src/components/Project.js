import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
 import experiences from '../experiences.json'; 

import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
  
export default class Projects extends React.Component {

  render() {

    return (
      <div className="projects">
     
      
         
          <Card>
            <CardImg top />
            <img src={this.props.item.image} className="img-fluid" /> 

            <CardBlock>
              <CardTitle> { this.props.item.title }</CardTitle>
              <CardSubtitle>{ this.props.item.description }</CardSubtitle>
              <CardText> </CardText>
              <Button>Learn more</Button>
            </CardBlock>
          </Card>
      
         
       </div>
    );
  }
}