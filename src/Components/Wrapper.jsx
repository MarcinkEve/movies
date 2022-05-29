import { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";
import Show from "./Show";
import Header from "./Header";
import Insert from "./Insert";
import Footer from "./Footer";
import "../Styles/allStyles.css";

const moviesDemo = [
  { id: 1, title: "A Dog's Purpose", year: 2017, genre: "Family" },
  { id: 2, title: "Atonement", year: 2007, genre: "Romance" },
  { id: 3, title: "Titanic", year: 1997, genre: "Drama" },
  { id: 4, title: "Final Destination", year: 2000, genre: "Horror" },
  { id: 5, title: "The Lake House", year: 2006, genre: "Romance" },
];

function Wrapper() {
  const moviesDemo = [
    { id: 1, title: "A Dog's Purpose", year: 2017, genre: "Family" },
    { id: 2, title: "Atonement", year: 2007, genre: "Romance" },
    { id: 3, title: "Titanic", year: 1997, genre: "Drama" },
    { id: 4, title: "Final Destination", year: 2000, genre: "Horror" },
    { id: 5, title: "The Lake House", year: 2006, genre: "Romance" },
  ];

  const [create, setCreate] = useState(null); //this helps create record
  const [edit, setEdit] = useState(null); //this helps edit record
  const [movies, setMovies] = useState([]); //this make array of movies
  const [moviesOrg, setMoviesOrg] = useState([]); //this is copy of original array
  const [updateTime, setUpdateTime] = useState(Date.now());
  //these states make "Edit" and "Create" components appear/disappear
  const [showId, setShowId] = useState(0);
  const [insert, setInsert] = useState(0);

  //this monitores "create" state changes
  useEffect(() => {
    //first time loaded state is empty, it returns nothing
    if (null === create) {
      return;
    }
    //here is data fetch from database (backend port)
    axios.post("http://localhost:5050/movies", create).then((res) => {
      //this creates automatic data update in browser without reloading page
      setUpdateTime(Date.now());
    });
    // console.log(create);
  }, [create]);

  //this monitores "edit" state changes
  useEffect(() => {
    //first time loaded state is empty, it returns nothing
    if (null === edit) {
      return;
    }
    axios.put("http://localhost:5050/movies/" + edit.id, edit).then((res) => {
      //this creates automatic data update in browser without reloading page
      setUpdateTime(Date.now());
    });
    //console.log(edit);
  }, [edit]);

  //this gets data from server (database) and puts it into state's array
  useEffect(() => {
    axios.get("http://localhost:5050/movies").then((resp) => {
      setMovies(resp.data);
      setMoviesOrg(resp.data);
    });
  }, [updateTime]);

  //funkcija, kuri siuncia i serveri info, ka istrinti pgl ID (BUTINAI DETI "/" po adreso nuorodos!!!):
  const deleteMovie = (id) => {
    axios.delete("http://localhost:5050/movies/" + id).then((res) => {
      setUpdateTime(Date.now());
    });
  };

  //this function filters which record to show and edit according its ID
  const show = () => {
    return movies.filter((a) => a.id === showId)[0];
  };

  //this function shows form for new data record
  const insertCreate = (donIsert) => {
    setInsert(donIsert);
  };

  //filter by genre
  const filter = (value) => {
    switch (parseInt(value)) {
      case 1:
        setMovies(moviesOrg);
        break;
      case 2:
        setMovies(moviesOrg);
        setMovies((mov) => {
          return mov.filter((el) => {
            if (el.genre === "Animation") {
              return el;
            }
            return 0;
          });
        });
        break;
      case 3:
        setMovies(moviesOrg);
        setMovies((mov) => {
          return mov.filter((el) => {
            if (el.genre === "Drama") {
              return el;
            }
            return 0;
          });
        });
        break;
      case 4:
        setMovies(moviesOrg);
        setMovies((mov) => {
          return mov.filter((el) => {
            if (el.genre === "Family") {
              return el;
            }
            return 0;
          });
        });
        break;
      case 5:
        setMovies(moviesOrg);
        setMovies((mov) => {
          return mov.filter((el) => {
            if (el.genre === "Horror") {
              return el;
            }
            return 0;
          });
        });
        break;
      case 6:
        setMovies(moviesOrg);
        setMovies((mov) => {
          return mov.filter((el) => {
            if (el.genre === "Romance") {
              return el;
            }
            return 0;
          });
        });
        break;
      case 7:
        setMovies(moviesOrg);
        setMovies((mov) => {
          return mov.filter((el) => {
            if (el.genre === "SciFi") {
              return el;
            }
            return 0;
          });
        });
        break;
      case 8:
        setMovies(moviesOrg);
        setMovies((mov) => {
          return mov.filter((el) => {
            if (el.genre === "Thriller") {
              return el;
            }
            return 0;
          });
        });
        break;

      default:
    }
  };

  //sort by title
  const doSortTitle = (value) => {
    switch (parseInt(value)) {
      case 1:
        setMovies(moviesOrg);
        break;
      case 2:
        setMovies((mov) => {
          mov.sort((a, b) => {
            if (a.title > b.title) {
              return 1;
            }
            if (a.title < b.title) {
              return -1;
            }
            return 0;
          });
          return [...mov];
        });
        break;
      case 3:
        setMovies((mov) => {
          mov.sort((a, b) => {
            if (a.title > b.title) {
              return -1;
            }
            if (a.title < b.title) {
              return 1;
            }
            return 0;
          });
          return [...mov];
        });
        break;
      default:
    }
  };

  //sort by year
  const doSortYear = (value) => {
    const copy = [...movies];
    switch (parseInt(value)) {
      case 4:
        setMovies(moviesOrg);
        break;
      case 5:
        setMovies(copy.sort((a, b) => a.year - b.year));
        break;
      case 6:
        setMovies(copy.sort((a, b) => b.year - a.year));
        break;
      default:
    }
  };

  return (
    <>
      <div className="wrapper">
        <Header
          moviesDemo={moviesDemo}
          doSortTitle={doSortTitle}
          doSortYear={doSortYear}
          filter={filter}
          insertCreate={insertCreate}
        ></Header>
        <div>
          <div>
            <div>
              {insert ? (
                <Insert setCreate={setCreate} insert={insert} setInsert={setInsert}></Insert>
              ) : null}
            </div>
            <div>
              <List
                moviesDemo={moviesDemo}
                moovies={movies}
                deleteMovie={deleteMovie}
                setShowId={setShowId}
              ></List>
            </div>
          </div>
        </div>
        <Show id={showId} setShowId={setShowId} show={show} setEdit={setEdit}></Show>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Wrapper;
