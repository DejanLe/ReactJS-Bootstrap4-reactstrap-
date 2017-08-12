import React, {Component} from 'react';
import { Container, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import experiences from '../experiences.json'; 	

class Experience extends Component{ 

  render() {

    return (
     <div>
       
      
      <Card>
          <CardImg top />
          <img src={this.props.item.image} className="img-fluid" /> 
        <CardBlock>
        
          <CardTitle>{ this.props.item.title }</CardTitle>
          <CardSubtitle>{ this.props.item.period }</CardSubtitle>
          <CardText>{  this.props.item.company }</CardText>
           
        </CardBlock>
      </Card>
     
      
    </div>
  
    );
  }
}
export default Experience;