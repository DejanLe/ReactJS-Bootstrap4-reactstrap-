import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import  Jumbotron   from './components/Jumbotron';
import  About   from './components/About';
import  Experience   from './components/Experience';
import  Skill   from './components/Skill';
import  Project   from './components/Project';
import cv from './cv.json'; 

class App extends Component {

  renderAbouts(){
    let resultsArray = [];
    cv.abouts.map((item, i) => {
      resultsArray.push(<About item={item} key={i}  />);
    });
    return resultsArray;
  } 
 renderExperiences(){
    let resultsArray = [];
    cv.experiences.map((item, i) => {
      resultsArray.push(<Experience item={item} key={i}  />);
    });
    return resultsArray;
  } 
 renderSkills(){
    let resultsArray = [];
    cv.skills.map((item, i) => {
      resultsArray.push(<Skill item={item} key={i}  />);
    });
    return resultsArray;
  } 
 renderProjects(){
    let resultsArray = [];
    cv.projects.map((item, i) => {
      resultsArray.push(<Project item={item} key={i}  />);
    });
    return resultsArray;
  } 

  
  render() {
    return (
       <div>

        <Jumbotron />
          <Container>
              
             {this.renderAbouts()} 
             {this.renderExperiences()}
             {this.renderSkills()}
             {this.renderProjects()}
              
          </Container> 
       </div>
    );
  }
}

export default App;
