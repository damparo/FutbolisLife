import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Timer.css";
import CardGroup from "react-bootstrap/CardGroup";
// import moment from "moment";

function Timer() {

    const [timerYears, setTimerYears] = useState();
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const startCountDown = () => {

      const startDate = new Date("November 21,2022 ").getTime();

      interval = setInterval( () => {

        const now = new Date().getTime();

        const timeBetweenDates = startDate - now;

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

    // const [now, setNow] = useState(new Date());
    // const isTimeUp = isBefore(futureDate, now);
    // let years = 0;
    // let months = 0;
    // let days = 0;
    // let hours = 0;
    // let minutes = 0;
    // let seconds = 0;

    // if(!isTimeUp){
    //     const duration = intervalToDuration({
    //         start: now,
    //         end: futureDate
    //     });

    //     years = duration.years;
    //     months = duration.months;
    //     days = duration.days;
    //     hours = duration.hours;
    //     minutes = duration.minutes;
    //     seconds = duration.seconds;

    // }

    // useEffect( () => {

    //   setInterval( () => {
    //     console.log("ticking");
    //     setNow(new Date())

    //   }, 1000)

    // }, [setNow]);

    // const timerContents = isTimeUp ? ( <div className={ style.timeIsUp}>time is up!!!</div>) : (

    // )

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
