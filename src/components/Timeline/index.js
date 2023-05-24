import { GameCard } from "../GameCard";
import { List } from "../List";

export const Timeline = ({ zeldaGames }) => {
  return (
    <section>
      <List
        data={zeldaGames.sort((a, b) => a.date - b.date)}
        render={(game, index) => {
          return (
            <li key={index}>
              <GameCard game={game} />
            </li>
          );
        }}
      />
    </section>
  );
};
