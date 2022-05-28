import { useState } from "react";

function Sort({ doSortTitle, doSortYear }) {
  //state for select option value setting
  const [choose, setChoose] = useState(1);

  return (
    <>
      <div className="sort">
        <h5>Sort by title: </h5>
        <select
          value={choose}
          onChange={(event) => {
            setChoose(event.target.value); //this sets select option value
            doSortTitle(event.target.value); //run sorting function
          }}
        >
          <option value="1">A-Z</option>
          <option value="2">Z-A</option>
        </select>

        <h5>Sort by year: </h5>
        <select
          value={choose}
          onChange={(event) => {
            setChoose(event.target.value); //this sets select option value
            doSortYear(event.target.value); //run sorting function
          }}
        >
          <option value="3">Oldest</option>
          <option value="4">Newest</option>
        </select>
      </div>
    </>
  );
}
export default Sort;
