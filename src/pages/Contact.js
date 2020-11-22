import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Nav from 'react-bootstrap/Nav';
import "../components/ProjectCard/style.css";
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

function Contact() {
    return (
        
        <div>
            <Navbar fixed="bottom" style={{height: '100px'}}/>
            <Hero>
                <h1> Contact me</h1>
                <h2>Email</h2>
            
            <Nav.Link className="email" href={'mailto:teresaheidt@hotmail.com'} target="_blank"><FaMailBulk size=""/>
            </Nav.Link>
            <h2>Github</h2>
            <Nav.Link className="github" href={'https://github.com/teresaheidt'} target="_blank"><FaGithub size=""/>
            </Nav.Link>
            <h2>LinkedIn</h2>
            <Nav.Link  className="linkedin" href={'https://www.linkedin.com/in/teresa-heidt-a2a4641/'} target="_blank"><FaLinkedin size=""/>
            </Nav.Link>
            
            </Hero>
   
            
          </div>
    )
}
    

export default Contact;