import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Nav from 'react-bootstrap/Nav'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

function Contact() {
    return (
        
        <div>
            <Navbar fixed="botom" style={{height: '100px'}}/>
            <Hero>
                <h1> Contact me</h1>
                <h2>Email</h2>
            
            <Nav.Link  href={'mailto:teresaheidt@hotmail.com'}><FaMailBulk size=""/>
            </Nav.Link>
            <h2>Github</h2>
            <Nav.Link  href='https://github.com/teresaheidt'><FaGithub size=""/>
            </Nav.Link>
            <h2>LinkedIn</h2>
            <Nav.Link  href='https://www.linkedin.com/in/teresa-heidt-a2a4641/'><FaLinkedin size=""/>
            </Nav.Link>
            
            </Hero>
   
            
          </div>
    )
}
    

export default Contact;