import React, { useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

//images are constant and never need to change so dont need to be stored in any component state. By creating the const cardImages outside of the cards array, it wont be recreated everytime the component is re-evaluated

const cardImages = [
  { src: '/img/helmet-1.png' },
  { src: '/img/potion-1.png' },
  { src: '/img/ring-1.png' },
  { src: '/img/scroll-1.png' },
  { src: '/img/shield-1.png' },
  { src: '/img/sword-1.png' },
]
//State

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  //When a user clicks on the first card we will update the state to be choiceOne which will become that card
  //When a user clicks on the second card, we will update the state to be choiceTwo which will become that card

  // Shuffle Cards function //

  const shuffleCards = () => {
    //Everytime a new game is started by clicking the 'new game' button, we are going to call this function shuffleCards which will shuffle the cards. It's going to set the cards (setCards) to be the shuffledCards constant and then it will also reset the turns back to 0 everytime the button is clicked.

    const shuffledCards = [...cardImages, ...cardImages]
      //using the spread operator two times means we get 2 sets of the array 'cardImages'.

      .sort(() => Math.random() - 0.5)
      // The sort method fires a function for each item or pair of items in the array

      //Math.random - If we return a number less than 0, the order of the two items stays the same, if we return a number greater than 0, the order of the two items it is comparing is mixed up. This gives us a shuffled array.

      .map((card) => ({ ...card, id: Math.random() }))
    //The map method fires a function for each item in the new shuffled array. For each item, we add a random id property. Each item is represented by the 'card' object in the .map function.

    setCards(shuffledCards)
    // When the shuffleCards function is called, it will generate the shuffledCards and then update the cards state to be shuffledCards
    setTurns(0)
  }

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  //Ternary operator
  //a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          //map through the cards array with the map method and then take each individual card in the array and return a template for the card.
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
          //nested SingleCard component and add on key property. Pass down the prop 'card' so we can destructure it from the props in the component SingleCard file
          //pass down the handleChoice function as a prop so we can call it in the SingleCard function
        ))}
      </div>
    </div>
  )
}

export default App
