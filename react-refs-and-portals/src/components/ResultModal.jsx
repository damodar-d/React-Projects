import { forwardRef, useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom'
const ResultModal = forwardRef(function (
  { targetTime, remainingTime, handleReset }, //targetTime is in seconds  //remainingTime is in miliseconds
  ref
) {
  const formRef = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - (remainingTime / (targetTime * 1000)) * 100));

  useImperativeHandle(ref, () => {
    return {
      show() {
        formRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={formRef} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds </strong>{" "}
      </p>
      <p>
        You stopped the timer when <strong>{formattedRemainingTime}</strong>{" "}
        seconds were left
      </p>
      <form action="dialog" onSubmit={handleReset}>
        <button type="submit">Close</button>
      </form>
    </dialog>
  , document.getElementById('modal'));
});

export default ResultModal;
