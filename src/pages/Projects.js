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
        <Navbar />
        <h1>My Project Page</h1>
        {this.state.projects.map(project => {
          return (
          <ProjectCard key={project.id}
            id={project.id}
            img={"/images/" + project.img}
            title={project.title}
            info={project.info}
            info2={project.info2}
            url={project.url}
            repo={project.info2}
            
          />
          )
        })}
      </div>
    )
  }
}

export default Projects;
