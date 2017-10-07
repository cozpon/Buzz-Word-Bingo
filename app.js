//jshint esversion:6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('public'));

let buzzStorage = [];

app.use(bodyParser.urlencoded({extended : true}));


app.get('/', (req, res) => {
  res.send("index.html");
});

app.get('/buzzwords', (req, res) => {
    res.json(buzzStorage);
  });

app.route('/buzzword')
  .post((req, res) => {
    buzzStorage.push(req.body);
    console.log(req.body); // the JSON
    res.send({"sucess": true}); //echo the result
  })
  .put((req, res) => {
    res.send("put done");
  })
  .delete((req, res) => {
    res.send("delete done");
  });



const server = app.listen(3000, () => {
  console.log("You are listening on port 3000");
});
