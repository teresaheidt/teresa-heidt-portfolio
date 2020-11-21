import React from 'react'
import Container from '../components/Container'
import ProjectCard from '../ProjectCard'
import Footer from "../Footer"
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/col'

function ProjectContainer() {

    return (
        <div className="ProjectContainer">
        <Container>
            <Row>
                <Col>
                <ProjectCard
                    img={"/images/map.png"}
                    title={"Middle Point"}
                    info={"Going somewhere far? Meeting somebody close? Middle Point finds the perfect location for all occasions!"}
                    info2={" "}
                    url={"  "}
                    repo={"JavaScript, jquery, Bootstrap, AJAX"}
                />
                </Col>
                <Col>
                <ProjectCard
                    img={"assets/images/White-Glove-Detailing.png"}
                    title={"  "}
                    description={"This application is the basis for a company that provides car detailing services while a customer is shopping at malls, grocery stores, etc..."}
                    deployed={"  "}
                    repo={"  "}
                    tech={"Handlebars, Node, Express, JavaScript, jquery, MySQL,Sequalize, JawsDB"}
                />
                </Col>
                <Col>
                <ProjectCard
                    img={" "}
                    title={"  "}
                    description={" "}
                    deployed={"  "}
                    repo={"   "}
                    tech={"MongoDB, Express, JavaScript"}
                />
                </Col>

            </Row>
        </Container>
        </div>

    );

}

export default ProjectContainer