import './App.css'

//images are constant and never need to change so dont need to be stored in any component state. By creating the const cardImages outside of the cards array, it wont be recreated everytime the component is re-evaluated

const cardImages = [
  { src: '/img/helmet-1.png' },
  { src: '/img/potion-1.png' },
  { src: '/img/ring-1`.png' },
  { src: '/img/scroll-1.png' },
  { src: '/img/shield-1.png' },
  { src: '/img/sword-1.png' },
]

function App() {
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button>New Game</button>
    </div>
  )
}

export default App
