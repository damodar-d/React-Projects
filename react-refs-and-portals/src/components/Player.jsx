import { useReducer, useRef } from "react";
import { useState } from "react";

export default function Player() {

  const [playerName,setPlayerName] = useState('Unknown Entity');
  const inputRef = useRef()


  function handleClick(event){
    setPlayerName(inputRef.current.value)
    inputRef.current.value=''

  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={inputRef} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
