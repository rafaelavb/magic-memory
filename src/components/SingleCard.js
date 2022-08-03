import './SingleCard.css'

export default function SingleCard({ card }) {
  return (
    <div className="card">
      {/* the parent element needs a key property so the key is going to be equal to the card id */}
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/img/cover.png" alt="card back" />
      </div>
    </div>
  )
}
