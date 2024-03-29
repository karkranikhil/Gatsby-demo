import React from 'react'
import {Card, Button} from 'react-bootstrap'
const Post=(props)=>(
    <div className="p-3">
 <Card>
  <Card.Img variant="top" src={props.image} height="250" />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.content}
    </Card.Text>
    <Button variant="primary" href={props.readMore}>Read more ...</Button>
  </Card.Body>
</Card>
    </div>
   
)
export default Post