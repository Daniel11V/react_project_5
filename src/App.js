import './App.css';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

const App = ({ breakLength, session, changeBreak, changeSession }) => {
  const [actualTime, setActualTime] = useState('newSession');
  const [minutos, setMinutos] = useState(session);
  const [segundos, setSegundos] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    switch (actualTime) {
      case 'newSession':
        setSegundos(0);
        setMinutos(session);
        if (timerOn) {
          setActualTime('session');
        }
        break;
      case 'newBreak':
        setSegundos(0);
        setMinutos(breakLength);
        if (timerOn) {
          setActualTime('break');
        }
        break;
      default:
        break;
    }

    if (timerOn) {
      interval = setInterval(() => {
        if (segundos === 1 && minutos === 0) {
          if (actualTime === 'session') {
            setActualTime('newBreak');
          } else {
            setActualTime('newSession');
          }
        } else if (segundos === 0) {
          setSegundos(prevTime => prevTime + 59);
          setMinutos(prevTime => prevTime - 1);
        } else {
          setSegundos(prevTime => prevTime - 1);
        }
        // setSegundos(prevTime => prevTime - 1)
        // setMinutos(prevTime => prevTime - 1)
      }, 100)
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    }
  }, [timerOn, actualTime, segundos, minutos, session, breakLength])

  const refresh = () => {
    setTimerOn(false);
    setActualTime('newSession');
  }

  return (
    <div className="App">
      <h1 className="tittle">25 + 5 Clock</h1>
      <div>
        <div className="config inline">
          <div id="break-label">Break Length</div>
          <button id="break-decrement" onClick={() => changeBreak(false)}>
            <i className="fa fa-arrow-down fa-2x"></i>
          </button>
          <div id="break-length" className="inline">{breakLength}</div>
          <button id="break-increment" onClick={() => changeBreak(true)}>
            <i className="fa fa-arrow-up fa-2x"></i>
          </button>
        </div>
        <div className="config inline">
          <div id="session-label">Session Length</div>
          <button id="session-decrement" onClick={() => changeSession(false)}>
            <i className="fa fa-arrow-down fa-2x"></i>
          </button>
          <div id="session-length" className="inline">{session}</div>
          <button id="session-increment" onClick={() => changeSession(true)}>
            <i className="fa fa-arrow-up fa-2x"></i>
          </button>
        </div>
      </div>
      <div className="timer">
        <div id="timer-label">
          {((actualTime === 'newSession') || (actualTime === 'session')) ?
            "Session" : "Break"}
        </div>
        <div id="time-left">
          {('0' + minutos).slice(-2)}
          {':'}
          {('0' + segundos).slice(-2)}
        </div>
      </div>
      <div className="controler">
        <button id="start_stop" onClick={() => setTimerOn(!timerOn)}>
          <i className={`fa ${timerOn ? 'fa-pause' : 'fa-play'} fa-2x`}></i>
        </button>
        <button id="reset" onClick={refresh}>
          <i className="fa fa-refresh fa-2x"></i>
        </button>
      </div>
    </div >
  );
}

const mapStateToProps = state => ({
  session: state.session,
  breakLength: state.breakLength
});

const mapDispatchToProps = dispatch => ({
  changeBreak(isUp) {
    dispatch({
      type: "BREAK_CHANGE",
      up: isUp
    })
  },
  changeSession(isUp) {
    dispatch({
      type: "SESSION_CHANGE",
      up: isUp
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

