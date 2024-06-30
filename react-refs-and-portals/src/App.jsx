import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy"  targetTime={1}/>
        <TimerChallenge title="Medium"  targetTime={8}/>
        <TimerChallenge title="Not so Hard"  targetTime={10}/>
        <TimerChallenge title="Tough"  targetTime={30}/>
      </div>
    </>
  );
}

export default App;
