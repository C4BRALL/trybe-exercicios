import './App.css';
import data from './data';
import Pokelist from './components/Pokelist';

function App() {
  return (
    <div className="card">
      <Pokelist poke={ data } />
    </div>
  );
}

export default App;
