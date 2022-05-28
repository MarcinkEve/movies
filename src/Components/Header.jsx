import Filter from "./Filter";
import Sort from "./Sort";

function Header({ doSortTitle, doSortYear, filter, insert, insertCreate }) {
  return (
    <div>
      <h1>MOOVIES</h1>
      <Sort doSortTitle={doSortTitle} doSortYear={doSortYear}></Sort>
      <Filter filter={filter}></Filter>
      <button onClick={insertCreate} type="button">
        Add
      </button>
    </div>
  );
}

export default Header;
