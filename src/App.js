import './App.css';
import ClockTime from './Components/ClockTime/ClockTime';
import ClockTwo from './Components/ClockTwo/ClockTwo';
function App() {
  return (
    <div className="App">
      <div className="rowClocks">
        <div id='buyClock'>

          <ClockTime />
          <h1>BUY</h1>
        </div>
        <div id='sellClock'>
          <ClockTwo />
          <h1>SELL</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
