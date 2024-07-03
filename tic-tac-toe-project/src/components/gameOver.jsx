export default function GameOver({winner}){
    return(
    <div id="game-over">
        <h2>Game Over</h2>
        {winner&&<p>{winner} Won!</p>}
        {!winner&&<p>Its a draw</p>}
        <p><button>Play Again</button></p>
    </div>)
}