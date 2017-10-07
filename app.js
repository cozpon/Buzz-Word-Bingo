//jshint esversion:6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

app.use('/', router);

app.use(bodyParser.urlencoded({extended : true}));

app.route('/buzzword')
  .get((req, res) => {
    res.send("TEST");
  })
  .post((req, res) => {
    console.log(req.body); // the JSON
    res.send(req.body); //echo the result
   // app.use(bodyParser.urlencoded({ "success": true }));
  })
  .put((req, res) => {
    res.send("put done");
  })
  .delete((req, res) => {
    res.send("delete done");
  });

app.get('/', (req, res) => {
  res.send("index.html");
});

const server = app.listen(3000, () => {
  console.log("You are listening on port 3000");
});
