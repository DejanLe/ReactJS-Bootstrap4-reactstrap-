import React from 'react';
import { Progress } from 'reactstrap';
 

const Example = (props) => {
  return (
    <div className="skills">
      <h3 className="skills-about-projects">Skills</h3>
      <div className="text-center">Bootstrap 80%</div>
      <Progress value="80" />
      <div className="text-center">CSS 75%</div>
      <Progress value="75" />
      <div className="text-center">SCSS 85%</div>
      <Progress value="85" />
     
      <div className="text-center">Ruby on Rails 55%</div>
      <Progress value="55" />
      <div className="text-center">React JS 40%</div>
       <Progress value="40" /> 
       
    </div>
  );
};

export default Example;