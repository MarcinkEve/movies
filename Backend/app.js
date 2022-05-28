const express = require("express");
const app = express();
const port = 5050;
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//connecting to database
const connectToDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "movies_db",
});

///////////////////////////////////////////////////////
//data from input fields recording to server
app.post("/movies", (req, res) => {
  const sql = `
    INSERT INTO movies
    (title, year, genre)
    VALUES (?, ?, ?)
 `;

  connectToDB.query(
    sql,
    [req.body.title, req.body.year, req.body.genre],
    function (err, result) {
      if (err) throw err;
      console.log(result, err);
      res.json({ message: "ok" });
    }
  );
});

///////////////////////////////////////////////////////
//get data from server
app.get("/movies", (req, res) => {
  const sql = `
    SELECT
    id, title, year, genre
    FROM movies
    `;

  connectToDB.query(sql, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

///////////////////////////////////////////////////////
//remove item from database
app.delete("/movies/:id", (req, res) => {
  const sql = `
  DELETE 
  FROM movies
  WHERE id = ?   
`;

  connectToDB.query(sql, [req.params.id], function (err, result) {
    console.log(result, err);
    res.json({ message: "ok" });
  });
});

///////////////////////////////////////////////////////
//edit data
app.put("/movies/:id", (req, res) => {
  const sql = `
  UPDATE movies
  SET title = ?, year = ?, genre = ?
  WHERE id = ?   
`;

  connectToDB.query(
    sql,
    [req.body.title, req.body.year, req.body.genre, req.params.id],
    function (err, result) {
      console.log(result, err);
      res.json({ message: "ok" });
    }
  );
});

/////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
