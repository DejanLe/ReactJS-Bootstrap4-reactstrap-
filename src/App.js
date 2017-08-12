import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import  Jumbotron   from './components/Jumbotron';
import  About   from './components/About';
import  Experience   from './components/Experience';
import  Skill   from './components/Skill';
import  Project   from './components/Project';
import  Footer   from './components/Footer';
import experiences from './experiences.json'; 

class App extends Component {
 
  renderAbouts(){
    let resultsArray = [];
    experiences.abouts.map((item, i) => {
      resultsArray.push(<About item={item} key={i}  />);
    });
    return resultsArray;
  } 
   renderExperiences(){
    let resultsArray = [];
    experiences.experiences.map((item, i) => {
     
      resultsArray.push(
       
         <Col xs="12" md="4"> 
            <Experience item={item} key={i}  />
         </Col>
      
      );

    });
    return resultsArray;
  } 
  
 renderSkills(){
    let resultsArray = [];
    experiences.skills.map((item, i) => {
      resultsArray.push(<Skill item={item} key={i}  />);
    });
    return resultsArray;
  } 
 renderProjects(){
    let resultsArray = [];
   experiences.projects.map((item, i) => {
      resultsArray.push(
       <Col xs="12" md="4"> 
      <Project item={item} key={i}  />
       </Col>
      );
    });
    return resultsArray;
  } 

  
  render() {
    return (
       <div>

        <Jumbotron />
        
          <Container>
              
             {this.renderAbouts()}
             <Row>
             <Col xs="12" md="12"> 
              <h3 className="skills-about-projects">{ experiences.title_experience }</h3>
               </Col> 
               {this.renderExperiences()} 
             </Row>
             {this.renderSkills()}
             <Row>
              <Col xs="12" md="12"> 
                <h3 className="skills-about-projects">{ experiences.title_projects }</h3>
               </Col> 
             {this.renderProjects()}
            </Row>
          </Container>
        <Footer /> 
       </div>
    );
  }
}

export default App;
