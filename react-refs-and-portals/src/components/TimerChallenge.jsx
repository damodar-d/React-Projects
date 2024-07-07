import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialogRef = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialogRef.current.show()
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialogRef.current.show()
    clearInterval(timer.current); 
  }

  function handleReset(){
    setTimeRemaining(targetTime * 1000);

  }

  return (
    <>
      <ResultModal ref={dialogRef} 
      targetTime={targetTime} 
      remainingTime={timeRemaining} 
      handleReset ={handleReset}/>

      <section className="challenge">
        <h2>{title}</h2>
        {timerIsActive && <p>You Lost</p>}
        <p className="challenge-time">
          {targetTime} Second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
