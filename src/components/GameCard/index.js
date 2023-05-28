import "./style.css";

export const GameCard = ({ game }) => {
  return (
    <article className="gameCard">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={game.image} alt={game.title} />
          </div>
          <div className="flip-card-back">
            <p>{game.text}</p>
          </div>
        </div>
      </div>
      <h2>
        {game.title} ({game.date}) for {game.platform}
      </h2>
    </article>
  );
};
