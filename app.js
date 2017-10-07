//jshint esversion:6

const express = require('express');
const app = express();
const router = express.Router();

app.use('/', router);


app.get('/', (req, res) => {
  res.send("hello, world,");
});

const server = app.listen(3000, () => {
  console.log("You are listening on port 3000");
});
