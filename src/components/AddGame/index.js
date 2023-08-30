import React, { useState } from "react";
import "./style.css";

const AddGame = ({ onAddGame }) => {
  const [addingGame, setAddingGame] = useState(false);
  const [newGame, setNewGame] = useState({
    platform: "",
    date: "",
    title: "",
    image: "",
    text: "",
  });

  const handleToggleForm = () => {
    if (addingGame) {
      setNewGame({
        platform: "",
        date: "",
        title: "",
        image: "",
        text: "",
      });
    }
    setAddingGame(!addingGame);
  };

  const handleDateChange = (e) => {
    const inputDate = e.target.value;
    setNewGame({ ...newGame, date: inputDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGame(newGame);
    setNewGame({
      platform: "",
      date: "",
      title: "",
      image: "",
      text: "",
    });
    setAddingGame(false);
  };

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const earliestYear = 1940;
    const years = [];

    for (let year = currentYear; year >= earliestYear; year--) {
      years.push(year);
    }

    return years;
  };

  return (
    <div className="add-game">
      <button onClick={handleToggleForm}>
        {addingGame ? "Cancel" : "Add new game"}
      </button>
      {addingGame && (
        <form onSubmit={handleSubmit}>
          <label>
            Platform:
            <input
              placeholder="PC, PS2, N64..."
              required
              type="text"
              maxLength={30}
              value={newGame.platform}
              onChange={(e) =>
                setNewGame({ ...newGame, platform: e.target.value })
              }
            />
          </label>
          <label>
            Release date:
            <select value={newGame.date} onChange={handleDateChange} required>
              <option value="">Select year</option>
              {generateYears().map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>
          <label>
            Game title:
            <input
              required
              type="text"
              maxLength={50}
              value={newGame.title}
              onChange={(e) =>
                setNewGame({ ...newGame, title: e.target.value })
              }
            />
          </label>
          <label>
            Url image:
            <input
              required
              type="text"
              value={newGame.image}
              onChange={(e) =>
                setNewGame({ ...newGame, image: e.target.value })
              }
            />
          </label>
          <label>
            Description:
            <input
              placeholder="Between 100 and 300 characters"
              required
              type="text"
              minLength={100}
              maxLength={300}
              value={newGame.text}
              onChange={(e) => setNewGame({ ...newGame, text: e.target.value })}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      )}
    </div>
  );
};

export default AddGame;
