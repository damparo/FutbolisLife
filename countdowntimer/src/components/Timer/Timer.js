import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Timer.css";
import CardGroup from "react-bootstrap/CardGroup";


function Timer() {
// set up  state variables for countdown timer: years, days, hours, minutes, seconds
    const [timerYears, setTimerYears] = useState();
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const startCountDown = () => {
      
      // set the variable with our target world cup date
      const startDate = new Date("November 21,2022 ").getTime();

      interval = setInterval( () => {

        const now = new Date().getTime();
        // this variable gives the difference in time between the future world cup date and the present, in milliseconds
        const timeBetweenDates = startDate - now;

        // convert the difference to years, days, hours, minutes, and seconds
        const years = Math.floor(timeBetweenDates/(365*24*60*60*1000));
        const days = Math.floor(timeBetweenDates % (365*24*60*60*1000)/(24*60*60*1000));
        const hours = Math.floor(timeBetweenDates % (24*60*60*1000)/(60*60*1000));
        const minutes = Math.floor(timeBetweenDates % (60*60*1000)/(60*1000));
        const seconds = Math.floor(timeBetweenDates % (60*1000)/(1000));

        if (timeBetweenDates < 0){
          clearInterval(interval.current);
        } else{

          setTimerYears(years);
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);



        }

      });

      
      
    }
    
    useEffect(() => {

      startCountDown();

    });

  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Years</Card.Title>
            <Card.Text value={timerYears} label="years" className="years">{timerYears}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Days</Card.Title>
            <Card.Text value={timerDays} label="days" className="days">{timerDays}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Hours</Card.Title>
            <Card.Text value={timerHours} label="" className="hours">{timerHours}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Minutes</Card.Title>
            <Card.Text value={timerMinutes} label="" className="minutes">{timerMinutes}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Seconds</Card.Title>
            <Card.Text value={timerSeconds} label="" className="seconds">{timerSeconds}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Timer;
