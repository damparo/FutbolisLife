import React from "react";
import Card from 'react-bootstrap/Card';
import "./Timer.css";
import CardGroup from 'react-bootstrap/CardGroup';
// import moment from "moment";

function Timer() {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Body>
          <Card.Title>Years</Card.Title>
            <Card.Text className="year">
              0
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
          <Card.Title>Months</Card.Title>
            <Card.Text className="months">
              10
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
          <Card.Title>Days</Card.Title>
            <Card.Text className="days">
              15
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup> 
    </div>
  );
}

export default Timer;
