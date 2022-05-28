import { useEffect, useState } from "react";

function Edit({ setShowId, showData, setEdit }) {
  //states for title, year, genre
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  //this is for genre selection value from dropdown list
  const selectChange = (event) => {
    setGenre(event.target.value);
  };

   //function that loads when "Save" button is clicked
  const buttonHandler = () => {
    setEdit({ title, year, genre, id: showData.id });
    setTitle("");
    setYear("");
    setGenre("");
    setShowId(0);
  };

  //this monitors showData (that shows record according its ID) changes and sets title, year and genre after update 
  useEffect(() => {
    setTitle(showData.title);
    setYear(showData.year);
    setGenre(showData.genre);
  }, [showData]);

  return (
    <div>
      <div className="card-header">Mistakes destroyer below</div>
      <div className="card-body">
        {/* Title */}
        <div>
          <label>Movie</label>
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          ></input>
        </div>
        {/* Year */}
        <div>
          <label>Year</label>
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
        {/* Button for saving updated information*/}
        <button onClick={buttonHandler} type="button">
          Save
        </button>
        {/* Button for cancel editing*/}
        <button onClick={() => setShowId(0)} type="button">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Edit;
