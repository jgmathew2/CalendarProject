import './App.css';

import Calendar from "./components/Calendar/Calendar"; 
import LeftTaskBar from "./components/LeftTaskBar/LeftTaskBar"; 
import RightTaskBar from './components/RightTaskBar/RightTaskBar';

function App() {

  return (
     // This is all a placeholder for Calendar component
    <div className="App">
      <h2 id="Title">Johu's Calendar</h2>
      <br></br>

      <div id="principal-row">


        <LeftTaskBar></LeftTaskBar>
      
        <Calendar></Calendar>

        <RightTaskBar></RightTaskBar>

      </div>
      
    </div>
  );
}

export default App;
