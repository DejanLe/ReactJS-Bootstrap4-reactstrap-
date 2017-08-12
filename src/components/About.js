import React, {Component} from 'react';
 

import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
	
export default class Example extends React.Component {

  render() {
    return (
      <div className="text-center">
        <h3 className="skills-about-projects">{ this.props.item.about_title }</h3>
        <img src={this.props.item.image} className="img-fluid cv-image" width="100px" height="100px" /> 
        	 <p>{ this.props.item.name }</p>
           <p>{ this.props.item.about_content }</p>
        	
       
      </div>
    );
  }
}