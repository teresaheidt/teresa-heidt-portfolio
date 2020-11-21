import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Nav from 'react-bootstrap/Nav'
import { FaMailBulk } from 'react-icons/fa';
// import { Linking } from 'react-native';

function Contact() {
    return (
        
        <div>
            <Navbar />
            <Hero>
                <h1> Contact me</h1>
                <h2>Email</h2>
                <a href="mailto:teresaheidt@hotmail.com" />
                <i className="fa fa-envelope"></i>
                {/* <Button onPress={() => Linking.openURL('mailto:support@example.com') }
      title="support@example.com" /> */}
<Nav.Link  href={'mailto:teresaheidt@hotmail.com'}><FaMailBulk />
</Nav.Link>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        
                    </Col>
                   
                </Row>
            </Container>  
            <Footer />  
          </div>
    )
}
    

export default Contact;