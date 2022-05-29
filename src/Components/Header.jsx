import Filter from "./Filter";
import Sort from "./Sort";

function Header({ doSortTitle, doSortYear, filter, insert, insertCreate }) {
  return (
    <div className="header">
      <div className="header_title-bin">
        <h1 className="header_title">My MOVIES</h1>
        <div className="add-new">
          <label className="header-label">Fell in love with new one?</label>
          <button onClick={insertCreate} type="button" className="button header-button">
            Add it
          </button>
        </div>
      </div>
      <div className="filters">
        <Sort doSortTitle={doSortTitle} doSortYear={doSortYear}></Sort>
        <Filter filter={filter}></Filter>
      </div>
    </div>
  );
}

export default Header;
