import './App.css';
import Game from './Game/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Adivina el numero
        </h1>
      </header>
      <div>
        <Game/>
      </div>
    </div>
  );
}

export default App;
