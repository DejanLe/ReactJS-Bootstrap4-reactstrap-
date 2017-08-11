import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
 import cv from '../cv.json'; 


const Projects = (props) => {
  return (
    <div>
    
      <Row> 
        <Col xs="12" md="4"> 
         <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBlock>
            <CardTitle>  <p> </p> </CardTitle>
            <CardSubtitle>Like, Comment, Share</CardSubtitle>
            <CardText> </CardText>
            <Button>Learn more</Button>
          </CardBlock>
        </Card>
      </Col> 
     </Row>
    </div>
  );
};

export default Projects;