const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries.js");
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);

// app.get("/", db.getAll);
app.get("/items", db.listItems);
app.post("/createBackpack", db.createBackpack);


app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
