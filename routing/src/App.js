import {Router} from "@reach/router"
import './App.css';
import Home from './components/Home'
import NumberOrWord from './components/NumberOrWord'
import Custom from './components/Custom'


function App() {
  return (
    <div className="App">
     <Router>
       <Home path="/home"/>
       <NumberOrWord path="/:parameter"/>
       <Custom path="/:parameter/:fontColor/:bgdColor"/>
     </Router>
    </div>
  );
}

export default App;
