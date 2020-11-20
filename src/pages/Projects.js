import React, { Component } from 'react';
import Navbar from "../components/Navbar";
// import ProjectContainer from '../components/ProjectContainer';
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
        <h1>My Project Page</h1>
        {this.state.projects.map(project => {
          return (
          <ProjectCard 
            id={project.id}
            title={project.title}
            image={project.image}
            
          />
          )
        })}
      </div>
    )
  }
}

export default Projects;
