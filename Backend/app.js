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

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "movies_db", //duombazes pavadinimas, joje gali buti daug ivairiu lenteliu, i kurias saugomi duomenys
});

///////////////////////////////////////////////////////
//CREATE
app.post("/movies", (req, res) => {
  const sql = `
    INSERT INTO movies
    (title, year, genre)
    VALUES (?, ?, ?)
 `;
  //lauztiniuose skliaustuose paduodama tai, kas bus auksciau esancioj eilutej vietoj klaustuku:
  con.query(
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
//IRASYMAS I SERVERI
//LIST

app.get("/movies", (req, res) => {
  const sql = `
    SELECT
    id, title, year, genre
    FROM movies
    `;

  con.query(sql, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

///////////////////////////////////////////////////////
//DELETE

app.delete("/movies/:id", (req, res) => {
  // klaustuka rasom vietoj id, nes sekancioj eilutej con.query... nurodom req.params.id
  const sql = `
  DELETE 
  FROM movies
  WHERE id = ?   
`;

  con.query(sql, [req.params.id], function (err, result) {
    console.log(result, err);
    res.json({ message: "ok" });
  });
});

///////////////////////////////////////////////////////
//EDIT

app.put("/movies/:id", (req, res) => {
  // klaustuka rasom vietoj id, nes sekancioj eilutej con.query... nurodom req.params.id
  const sql = `
  UPDATE movies
  SET title = ?, year = ?, genre = ?
  WHERE id = ?   
`;

  con.query(sql, [req.body.title, req.body.year, req.body.genre, req.params.id], function (err, result) {
    console.log(result, err);
    res.json({ message: "ok" });
  });
});




/////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
