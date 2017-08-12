import React from 'react';
import { Progress } from 'reactstrap';
 

const Example = (props) => {
  return (
    <div className="skills">
      <h3 className="skills-about-projects">Skills</h3>

      <div className="text-center">Bootstrap 85% </div>
      <Progress value="85" />

      <div className="text-center">CSS/Flexbox 85% </div>
      <Progress value="85" />

      <div className="text-center">SCSS 85% </div>
      <Progress value="85" />
     
      <div className="text-center">Ruby on Rails 65% </div>
      <Progress value="65" /> 

      <div className="text-center">Wordpress 75% </div>
       <Progress value="75" /> 

       <div className="text-center">React JS 40% </div>
       <Progress value="40" />  

      
     
    </div>
  );
};

export default Example;