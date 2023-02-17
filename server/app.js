const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();
app.use(bodyParser.json());
var cors = require('cors')

app.use(cors())
const db = require("./src/models");
const initRoutes = require("./src/routes/web");

global.__basedir = __dirname;

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

const dbb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1244",
  database: "jars",
});
dbb.connect(function (err) {
    if (err) throw err;
    console.log("Database is connected successfully !");
});

app.get('/api/get', (req, res) => {
  const sqlInsert = "SELECT * FROM images ";
    dbb.query(sqlInsert, (err, result) => {
      res.send(result);
      //console.log(result);
    });
})
// app.get("/api/get", (req, res) => {
//   const sqlInsert = "SELECT * FROM items ";
//   db.query(sqlInsert, (err, result) => {
//     res.send(result);
//     console.log(result);
//   });
// });

let port = 3001;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});