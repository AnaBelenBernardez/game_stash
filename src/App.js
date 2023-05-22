import "./App.css";
import zeldaGames from "./data/zelda.json";
import { GameCard } from "./components/GameCard";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Videogame Stash</h1>
      </header>
      <main>
        <ul>
          {zeldaGames.map((game, index) => {
            return (
              <li key={index}>
                <GameCard game={game} />
              </li>
            );
          })}
        </ul>
      </main>
      <footer>Ana Belén Bernárdez Martínez 2023</footer>
    </div>
  );
}

export default App;
