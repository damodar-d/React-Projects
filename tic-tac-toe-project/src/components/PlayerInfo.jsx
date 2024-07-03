import { useState } from "react"

export default function PlayerInfo({initialPlayerName, playerSymbol, isActive}){

    const[isEditing, setIsEditing] = useState(false)
    const[playerName, setPlayerName] = useState(initialPlayerName)
    let name= <span className={!isEditing?"player-name":undefined}>{playerName}</span>
    function handleClick(ev){

        if(isEditing){
            
        }
        setIsEditing(prev=>!prev)
        
    }

    function handleOnChange(ev){
        setPlayerName(prevPlayerName=> ev.target.value)

    }
    return(
        <li className={isActive?'active':undefined}>
            <span className="player">
              {isEditing===false?name:<input required value={playerName} onChange={handleOnChange} type="text"/>}
              <span className="player-symbol">{playerSymbol}</span>
              
            </span>
            <button onClick={handleClick}>{!isEditing?'Edit':'Save'}</button>
          </li>
    )
}