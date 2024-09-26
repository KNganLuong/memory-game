import './App.css'
import MemoryGame from './components/MemoryGame'
import { images } from './data/imagesData'

function App() {
  const gameImages = [...images, ...images]

  return (
    <div className='App'>
      <h1>Memory Game</h1>
      <MemoryGame images={gameImages} />
    </div>
  )
}

export default App
