export const GameCard = ({ game }) => {
  return (
    <article>
      <img src={game.image} alt={game.title} />
      <h2>
        {game.title} ({game.date}) for {game.platform}
      </h2>
      <p>{game.text}</p>
    </article>
  );
};
