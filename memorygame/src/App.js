import './App.css';
import styled from "styled-components";
import Cardsimg from './components/Cardsimg';
import CardsList from './components/CardsList';
import Flippy, {FrontSide,BackSide} from "react-flippy";


function App() {
  return (
    <div className="App">
      <p> The Memory Game</p>
     <CardsList/>

    
    </div>
    
  );
}

export default App;
