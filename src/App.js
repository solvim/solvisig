import react,{ useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date('July 24, 2021 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000*60*60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60 ))/ (1000*60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance < 0){
        //stop timer
        clearInterval(interval.current);
      }
      else{
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };

  // ComponentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  })
  return (
    <section>
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-calendar-clock timer-icon"></span>
            <h2>Spennandi niðurtalning</h2>
            <p>Rosalega spennandi</p>
        </div>
        <div>
          <section>
            <p>{timerDays}</p>
            <p><small>Days</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p><small>Minutes</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p><small>Seconds</small></p>
          </section>
        </div>
        <div className="socialmediaicons">
          <a href="https://www.linkedin.com/in/solvisig/" target="_blank" rel="noopener noreferrer">
          <i className="mdi mdi-linkedin" />
          </a>
          <a href="https://github.com/solvim" target="_blank" rel="noopener noreferrer">
          <i className="mdi mdi-github" />
          </a>
          <a href="https://www.instagram.com/solvimar/" target="_blank" rel="noopener noreferrer">
          <i className="mdi mdi-instagram" />
          </a>
        </div>
      </section>
    </section>
    </section>
  );
}

export default App;
