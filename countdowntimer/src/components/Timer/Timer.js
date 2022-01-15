import React from "react";
import Card from 'react-bootstrap/Card';
import "./Timer.css";
import CardGroup from 'react-bootstrap/CardGroup';
// import moment from "moment";

function Timer() {
  return (
    <div>
      {/* <Card>

      <p className="digitcolor">time blocks will go here</p>
      </Card> */}
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup> 
    </div>
  );
}

export default Timer;
