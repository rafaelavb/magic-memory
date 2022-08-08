import './SingleCard.css'

export default function SingleCard({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className="card">
      {/* the parent element needs a key property so the key is going to be equal to the card id */}
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleClick}
          //add onClick to back of card which handles a function handleClick
          alt="card back"
        />
      </div>
    </div>
  )
}
