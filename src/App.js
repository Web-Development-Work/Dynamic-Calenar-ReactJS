import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
      <div class="wrapper">
        <header>
          <p class="current-date"></p>
          <div class="icons">
            <span id="prev" class="material-symbols-rounded">chevron_left</span>
            <span id="next" class="material-symbols-rounded">chevron_right</span>
          </div>
        </header>
        <div class="calendar">
          <ul class="weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul class="days"></ul>
        </div>
      </div>

      <Helmet>
        <script type="text/javascript" src="./script.js"></script>
        {/* <script>try{Typekit.load({ async: true })}catch(e){ }</script> */}
      </Helmet>

    </>

  );
}

export default App;