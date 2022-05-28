//this function is for single movie description, updating and removing
function Movie({ el, deleteMovie, setShowId, index }) {
  return (
    <>
      <li className="list-item">
        <div className="list-item-description">
          <h3 className="list_item-number">{index + 1}.</h3>
          <div className="info">
            <h3 className="movie-title">{el.title}</h3>
            <h4 className="movie-year">{el.year}</h4>
            <h4 className="movie-genre">{el.genre}</h4>
          </div>

          <div className="movie-buttons">
            {/* this button/symbol opens single movie editing form according its ID */}
            {/* <button onClick={() => setShowId(el.id)} type="button">
            Edit
          </button> */}
            <svg onClick={() => setShowId(el.id)} className="edit">
              <use xlinkHref="#pencil"></use>
            </svg>

            {/* this button/symbol removes single movie according its ID*/}
            {/* <button onClick={() => deleteMovie(el.id)} type="button">
            DELETE
          </button> */}
            <svg onClick={() => deleteMovie(el.id)} className="remove">
              <use xlinkHref="#bin"></use>
            </svg>
          </div>
        </div>
      </li>
    </>
  );
}

export default Movie;
