import './App.css';
import Imagem from'./Image';
import cat from './cat-2083492_1280.webp'

function App() {
  return (
    <div>
      <Imagem source={cat} altText='Cute cat staring' />
    </div>
  );
}

export default App;
