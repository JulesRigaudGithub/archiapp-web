const express = require('express'); //import de la bibliothèque Express
const bodyParser = require('body-parser');

var app = express(); //instanciation d'une application Express

// const http = require('http');
// const WebSocket = require('ws');

const port = 10000;

// Pour s'assurer que l'on peut faire des appels AJAX au serveur
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Ici il n'y a pas besoin de gérer application/json mais seulement un type text/plain
app.use(bodyParser.text());

var allMsgs = ["Hello World", "foobar", "CentraleSupelec Forever"];

app.post("/msg/post", (req, res) => {
  const msg = req.body;

  allMsgs.push(msg);

  res.json({"code" : 1});
});

app.get("/msg/get/*", function(req, res) {
  var msg_idx_str = req.url.substr(9);
  if (msg_idx_str.match("\^[0-9]")) {
    var msg_idx = parseInt(msg_idx_str);

    if (msg_idx < allMsgs.length && msg_idx >= 0) {
      res.json({
        "code": 1,
        "msg": allMsgs[msg_idx]
      });
    } else {
      res.json({
        "code": 0
      });
    };
  } else {
    res.json({
      "code": 0
    });
  }
});

app.get("/msg/nber", (req, res) => {
  res.json({
    "code" : 1,
    "nber" : allMsgs.length});
});

app.get("/msg/getAll", (req, res) => {
  res.json({
    "code" : 1,
    "msgs" : allMsgs
  });
});

app.get("/msg/delAll", (req, res) => {
  allMsgs = [];
  res.json({
    "code" : 1
  });
});


app.listen(port, () => {
    console.log(`App listening on port ${port}...`);
});
