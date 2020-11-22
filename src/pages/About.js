import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import "../components/Header/style.css";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Profilepic from "../images/profileblackdress.jpeg";
import Resume from "../images/web.pdf";

function About() {
    return (
        <div>
            <Navbar />
        
            <Container style={{ marginTop: 50 }}>
                <Row>
                    <Col size="md-6">
                        <h1>About Me</h1>
                        <p>
                        I am a web designer and developer.
                        Being creative and designing captivating content is my focus.
                        I am always thinking outside the box and bringing new ideas to the table.
                        This is why I want to help YOU create, design and implement your projects.
                        I have passion, drive and I am self-motivated. My solid work ethic enables me to give my all on any project I work on. 
                        In 2020, I graduated with a certificate from Southern Methodist University in Full Stack Web Developement. 
                        In 2016, I was the recipient of the NMG Best award for oustanding service at the Neiman Marcus Group.
                        Born and raised in England, I have lived in the U.S. for the past twenty years.
                        I love helping people, solving problems and performing my very best.
                        One of my passions is writing and in 2018, I published a book called
                        'Personal Appearances Are Everything'. In November 2020, my second book was published, 'Online Or Off'. 
                        One more book is due for release in 2021. 
                        In my spare time I love; running, reading, writing, coding and spending time with my Shar-pei pug 🐶.
                        </p>
                    </Col>
                    <Col size="md-6">
                        <br />
                        <img src={Profilepic} alt={"headshot"} height={300} width={300} ></img>
                    </Col>
                </Row>
                <Row> 
                        <a href={Resume} target="_blank"><h3>My Resume</h3></a>
                </Row>
                    < br />
                    
            </Container>
            
        </div>
    );
}

export default About;