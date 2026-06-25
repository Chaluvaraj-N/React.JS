import React, {useState,useRef}from 'react'

function StopWatch() {
    const [time, setTime] = React.useState(0);
    const intervalRef = useRef();

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    }

  return (
    <div>
      <h1>Stop Watch</h1>
      <h5>{time}</h5>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default StopWatch
