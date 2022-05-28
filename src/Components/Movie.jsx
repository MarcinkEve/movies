//this function is for single movie description, updating and removing
function Movie({ el, deleteMovie, setShowId }) {
  return (
    <>
      <li>
        <div>
          <strong>{el.title}</strong>
          <small>{el.year}</small>
          <small>{el.genre}</small>
        </div>
        <div>
          {/* this button opens single movie editing form according its ID */}
          <button onClick={() => setShowId(el.id)} type="button">
            Edit
          </button>
          {/* this button removes single movie according its ID*/}
          <button onClick={() => deleteMovie(el.id)} type="button">
            DELETE
          </button>
        </div>
      </li>
    </>
  );
}

export default Movie;
