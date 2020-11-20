import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

function Contact() {
    return (
        
        <div>
            <Navbar />
            <Hero>
                <h1> Contact me</h1>
                <h2>Email</h2>
                <a href="mailto:teresaheidt@hotmail.com" />
                <i className="fa fa-envelope"></i>

            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        
                    </Col>
                </Row>
            </Container>    
          </div>
    )
}
    

export default Contact;