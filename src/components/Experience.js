import React, {Component} from 'react';
import { Container, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
	

class Experience extends Component{ 

  render() {

    return (
     <div>
       <Col xs="12" md="4"> 
         <h3 className="skills-about-projects">{  this.props.item.about_title }</h3>
          
  
     
       <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBlock>
        
          <CardTitle>{ this.props.item.title }</CardTitle>
          <CardSubtitle>{ this.props.item.period }</CardSubtitle>
          <CardText>{  this.props.item.company }</CardText>
           
        </CardBlock>
      </Card>
      </Col>
      
    </div>
  
    );
  }
}
export default Experience;