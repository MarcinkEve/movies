import { useState } from "react";

function Sort({ doSortTitle, doSortYear }) {
  //state for select option value setting
  const [choose, setChoose] = useState(1);

  return (
    <>
      <div className="sort">
        <h4 className="sort-title">Sort by: </h4>
        <select
          value={choose}
          onChange={(event) => {
            setChoose(event.target.value); //this sets select option value
            doSortTitle(event.target.value); //run sorting function
          }}
        >
          <option value="1">Title</option>
          <option value="2">A-Z</option>
          <option value="3">Z-A</option>
        </select>

        <select
          value={choose}
          onChange={(event) => {
            setChoose(event.target.value); //this sets select option value
            doSortYear(event.target.value); //run sorting function
          }}
        >
          <option value="4">Newness</option>
          <option value="5">Oldest</option>
          <option value="6">Newest</option>
        </select>
      </div>
    </>
  );
}
export default Sort;
