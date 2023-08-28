import React, { useState } from "react";
import "./App.css";
import myGames from "./data/games.json";
import Timeline from "./components/Timeline";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Nav from "./components/Nav";
import AddGame from "./components/AddGame";

function App() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("myGames");
    return storedGames ? JSON.parse(storedGames) : myGames;
  });

  const handleAddGame = (newGame) => {
    const updatedGames = [...games, newGame];
    setGames(updatedGames);
    localStorage.setItem("myGames", JSON.stringify(updatedGames));
  };

  return (
    <div className="App">
      <header>
        <h1>
          <span>My</span>
          <span>Videogame</span>
          <span>Stash</span>
        </h1>
        <Nav />
      </header>
      <ScrollToTopButton />
      <main>
        <AddGame onAddGame={handleAddGame} />
        <Timeline myGames={games} setMyGames={setGames} />
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
