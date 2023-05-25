import "./App.css";
import zeldaGames from "./data/zelda.json";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Videogame Stash</h1>
      </header>
      <main>
        <Timeline zeldaGames={zeldaGames} />
      </main>
      <footer>
        <p>Ana Belén Bernárdez Martínez 2023</p>
      </footer>
    </div>
  );
}

export default App;
