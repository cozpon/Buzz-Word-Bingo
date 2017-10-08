//jshint esversion:6

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

let buzzStorage = [];
let playerPoints = 0;
let pass = {"sucess": true};
let fail = {"sucess": false};


app.get('/', (req, res) => {
  res.json("index.html");
});

app.get('/buzzwords', (req, res) => {
    res.json(buzzStorage);
});

app.route('/buzzword')
  .post((req, res) => {
    if (!req.body || !req.body.buzzWord || !req.body.heard) return res.sendStatus(400);
    if(buzzStorage.length === 0){
      buzzStorage.push(req.body);
      res.json(pass);
      console.log(req.body.buzzWord + " successfully added!");
    } else {
        for(let i = 0; i < buzzStorage.length; i++){
          if(buzzStorage[i].buzzWord === req.body.buzzWord){
            console.error("Buzzword already used");
            return res.json(fail);
          }
        }
      buzzStorage.push(req.body);
      res.json(pass);
      console.log(req.body.buzzWord + " successfully added!");
      }
  })

  .put((req, res) => {
    if (!req.body || !req.body.buzzWord || !req.body.heard) return res.sendStatus(400);
    for(let i = 0; i < buzzStorage.length; i++){ // I know my storage is limited to 5
      if(buzzStorage[i].buzzWord === req.body.buzzWord){
        buzzStorage[i].heard = true; // changes HEARD status to TRUE.
        playerPoints += parseInt(buzzStorage[i].points); // adds buzzword points
        console.log(playerPoints);
        return res.json(pass); // sends back to client true
      }
    }
  })

  .delete((req, res) => {
     if (!req.body || !req.body.buzzWord) return res.sendStatus(400);
     console.log(req.body.buzzWord);
  });



const server = app.listen(PORT, () => {
  console.log("You are listening on port " + PORT);
});
