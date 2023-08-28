import "./style.css";
import { GameCard } from "../GameCard";
import { List } from "../List";

const Timeline = ({ myGames }) => {
  return (
    <section className="timeline">
      <List
        data={myGames.sort((a, b) => a.date - b.date)}
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

export default Timeline;
