import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="tittle">25 + 5 Clock</h1>
      <div>
        <div className="config inline">
          <div id="break-label">Break Length</div>
          <button id="break-decrement" onClick={{}}>
            <i className="fa fa-arrow-down fa-2x"></i>
          </button>
          <div id="break-length" className="inline">5</div>
          <button id="break-increment" onClick={{}}>
            <i className="fa fa-arrow-up fa-2x"></i>
          </button>
        </div>
        <div className="config inline">
          <div id="session-label">Session Length</div>
          <button id="session-decrement" onClick={{}}>
            <i className="fa fa-arrow-down fa-2x"></i>
          </button>
          <div id="session-length" className="inline">5</div>
          <button id="session-increment" onClick={{}}>
            <i className="fa fa-arrow-up fa-2x"></i>
          </button>
        </div>
      </div>
      <div className="timer">
        <div id="timer-label">
          {(1) ? "Session" : "Break"}
        </div>
        <div id="time-left">
          {`${"25"}:${"00"}`}
        </div>
      </div>
      <div className="controler">
        <button id="start_stop" onClick={{}}>
          {
            (1) ? <i className="fa fa-play fa-2x"></i>
              : <i className="fa fa-pause fa-2x"></i>
          }
        </button>
        <button id="reset" onClick={{}}>
          <i className="fa fa-refresh fa-2x"></i>
        </button>
      </div>
    </div >
  );
}

export default App;
