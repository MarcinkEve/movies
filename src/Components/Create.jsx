import { useState } from "react";

function Create({ setCreate, setInsert }) {
  //states for title, year, genre
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  //this is for genre selection value from dropdown list
  const selectChange = (event) => {
    // console.log(event.target.value);
    setGenre(event.target.value);
  };

  //function that loads when "Add" button is clicked
  const buttonHandler = () => {
    setCreate({ title, year, genre });
    setTitle("");
    setYear("");
    setGenre("");
    setInsert(0);
  };

  return (
    <div>
      <div className="card-header">New favourite movie</div>
      <div className="card-body">
        {/* Title */}
        <div>
          <label>Movie title</label>
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          ></input>
        </div>
        {/* Year */}
        <div>
          <label>Released Year</label>
          <input
            type="text"
            onChange={(event) => setYear(event.target.value)}
            value={year}
          ></input>
        </div>
        {/* Select genre */}
        <div>
          <legend>Genre</legend>
          <select value={genre} onChange={selectChange}>
            <option value="#">Select genre</option>
            <option value="Animation">Animation</option>
            <option value="Drama">Drama</option>
            <option value="Family">Family</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="SciFi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>
        {/* Button for adding to list */}
        <button onClick={buttonHandler} type="button">
          Add
        </button>
      </div>
    </div>
  );
}

export default Create;
