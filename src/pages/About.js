import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";

function About() {
    return (
        <div>
            <Hero>
            Hello there! This is about ME
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1>About Me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
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
                        'Personal Appearances Are Everything'. There are two more books in the pipeline for release, in late 2020 and 2021. 
                        In my spare time I love; running, reading, writing, coding and spending time with my Shar-pei pug 🐶.
                        </p>
                    </Col>
    
                </Row>
            </Container>
        </div>
    );
}

export default About;