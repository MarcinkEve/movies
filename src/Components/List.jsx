import Movie from "./Movie";

//this function renders all movies as a list
function List({ moovies, deleteMovie, setShowId }) {
  return (
    <>
      <div>
        <div>My favourites list</div>
        <div>
          <ul>
            {moovies.map((el) => (
              <Movie
                key={el.id}
                el={el}
                deleteMovie={deleteMovie}
                setShowId={setShowId}
              ></Movie>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default List;
