import React, { useEffect, useState } from "react";
import { intervalToDuration, isBefore } from "date-fns";
import Card from "react-bootstrap/Card";
import "./Timer.css";
import CardGroup from "react-bootstrap/CardGroup";
// import moment from "moment";

function Timer({futureDate}) {

    const [now, setNow] = useState(new Date());
    const isTimeUp = isBefore(futureDate, now);
    let years = 0;
    let months = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if(!isTimeUp){
        const duration = intervalToDuration({
            start: now,
            end: futureDate
        });

        years = duration.years;
        months = duration.months;
        days = duration.days;
        hours = duration.hours;
        minutes = duration.minutes;
        seconds = duration.seconds;

    }

    useEffect( () => {

      setInterval( () => {
        console.log("ticking");
        setNow(new Date())

      }, 1000)

    }, []);

    // const timerContents = isTimeUp ? ( <div className={ style.timeIsUp}>time is up!!!</div>) : (

    // )

  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Years</Card.Title>
            <Card.Text value={years} label="years" className="years">{years}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Months</Card.Title>
            <Card.Text value={months} label="days" className="months">{months}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Days</Card.Title>
            <Card.Text value={days} label="" className="days">{days}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Hours</Card.Title>
            <Card.Text value={hours} label="" className="hours">{hours}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Minutes</Card.Title>
            <Card.Text value={minutes} label="" className="minutes">{minutes}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Seconds</Card.Title>
            <Card.Text value={seconds} label="" className="seconds">{seconds}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Timer;
