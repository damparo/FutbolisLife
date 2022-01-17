import React, { useState } from "react";
import { intervalToDuration, isBefore } from "date-fns";
import Card from "react-bootstrap/Card";
import "./Timer.css";
import CardGroup from "react-bootstrap/CardGroup";
// import moment from "moment";

function Timer({futureDate}) {

    const now = new Date();
    const isTimeUp = isBefore(futureDate, now);
    let years = 0;
    let months = 0;
    let days = 0;

    if(!isTimeUp){
        const duration = intervalToDuration({
            start: now,
            end: futureDate
        });

        years = duration.years;
        months = duration.months;
        days = duration.days;

    }

    // const timerContents = isTimeUp ? ( <div className={ style.timeIsUp}>time is up!!!</div>) : (

    // )

  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Years</Card.Title>
            <Card.Text value={years} label="years" className="years"></Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Months</Card.Title>
            <Card.Text value={months} label="days" className="months"></Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Days</Card.Title>
            <Card.Text value={days} label="" className="days"></Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Timer;
