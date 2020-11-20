import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./style.css";

function ProjectCard(props) {
  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Image>{props.image}</Card.Image> */}
        <Card.Text>{props.text}</Card.Text>
       
          <Button className="button">Deployed Link</Button><br /><p />
          <Button>Github Link</Button>
      </Card.Body>
    </Card>

  )

}


export default ProjectCard;