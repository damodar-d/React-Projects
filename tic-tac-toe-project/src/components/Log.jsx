export default function Log({turns}){
    return(
        <ol id="log">
            {turns.map( (turn, turnsIndex) =><li key={turnsIndex}> {turn.player} Selected {turn.square.row} and {turn.square.col} </li> )}
        </ol>
    )
}