import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import myProjects from "../projects.json";
import ProjectCard from "../components/ProjectCard"

class Projects extends Component {
  state = {
    projects: myProjects
  }
  componentDidMount(){
    console.log(this.state.projects)
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container style={{ marginTop: 50 }}>
        <Row>
            <Col size="md-6">
         
              <h1>My Project Page</h1>
            </Col>  
        </Row>      
        {this.state.projects.map(project => {
          return (
          <ProjectCard key={project.id}
            id={project.id}
            img={"/images/" + project.img}
            title={project.title}
            info={project.info}
            info2={project.info2}
            url={project.url}
            repo={project.repo}
            
          />
          )
        })}
      </Container>
      </div>
    );
  }
}

export default Projects;
