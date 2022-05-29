import { useState } from "react";

function Filter({ filter }) {
  //state for select option value setting
  const [select, setSelect] = useState(1);

  return (
    <>
      <div>
        <h4 className="filter-title">Filter by genre: </h4>

        <select
          value={select}
          onChange={(event) => {
            setSelect(event.target.value); //this sets select option value
            filter(event.target.value);  //this filters according select option value
          }}
        >
          <option value="1">--All--</option>
          <option value="2">Animation</option>
          <option value="3">Drama</option>
          <option value="4">Family</option>
          <option value="5">Horror</option>
          <option value="6">Romantic</option>
          <option value="7">Sci-Fi</option>
          <option value="8">Thriller</option>
        </select>
      </div>
    </>
  );
}
export default Filter;
