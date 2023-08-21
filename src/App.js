import "./App.css";
import myGames from "./data/games.json";
import { Timeline } from "./components/Timeline";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Videogame Stash</h1>
      </header>
      <ScrollToTopButton />
      <main>
        <Timeline myGames={myGames} />
      </main>
      <footer>
        <p>
          <a
            href="https://www.linkedin.com/in/anabelenbernardez/"
            title="My LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ana Belén Bernárdez Martínez 2023
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
