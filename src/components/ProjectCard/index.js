import React from 'react';
import Card from 'react-bootstrap/Card';
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

          <a className="links" style={{textDecoration: 'none'}} href={props.url} target="_blank">Deployed Link</a><br /><p />
          <a className="links" style={{textDecoration: 'none'}} href={props.repo} target="_blank">Github Link</a>
      
      </Card.Body>
    </Card>
    <br /><br />
    </div>
  )
}


export default ProjectCard;