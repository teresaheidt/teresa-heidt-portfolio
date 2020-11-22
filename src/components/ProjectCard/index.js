import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./style.css";

function ProjectCard(props) {
  return (
    <div>
    <Card className="card" style={{ width: '28rem' }}>
      <Card.Img variant="top" src={props.img} />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text>{props.text}</Card.Text>
  <p>{props.info}</p>
  <p><i>{props.info2}</i></p>
  {/* <Card.Info>{props.info}</Card.Info> */}
  <a href={props.url}>Deployed Link</a><br /><p />
  <a href={props.repo}>Github Link</a>
      </Card.Body>
    </Card>
    </div>
  )
}


export default ProjectCard;