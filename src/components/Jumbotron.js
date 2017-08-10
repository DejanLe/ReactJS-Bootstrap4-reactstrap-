import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import cv from '../cv.json'; 

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Girls first then programming!</h1>
        <p className="lead">You can always choose! </p>
        <hr className="my-2" />
        <p>I am a big fan of web development. In work I use Bootstrap, React Js, Ruby on Rails</p>
        <p className="lead">
          <Button type="button" color="primary" target="_blank">
          Learn More</Button>

        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;