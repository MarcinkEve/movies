import Movie from "./Movie";

//this function renders all movies as a list
function List({ moviesDemo, moovies, deleteMovie, setShowId }) {
  return (
    <>
      <div className="list">
      <ul>
          {moviesDemo.map((el, index) => (
            <Movie
              index={index}
              key={el.id}
              el={el}
              deleteMovie={deleteMovie}
              setShowId={setShowId}
            ></Movie>
          ))}
        </ul>        
        <ul>
          {moovies.map((el, index) => (
            <Movie
              index={index}
              key={el.id}
              el={el}
              deleteMovie={deleteMovie}
              setShowId={setShowId}
            ></Movie>
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;
