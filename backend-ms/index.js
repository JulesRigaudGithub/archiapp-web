var express = require('express'); //import de la bibliothèque Express
var app = express(); //instanciation d'une application Express
const port = 8080;

// Pour s'assurer que l'on peut faire des appels AJAX au serveur
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var allMsgs = ["Hello World", "foobar", "CentraleSupelec Forever"];

app.get("/msg/get/*", function(req, res) {
  var msg_idx_str = req.url.substr(9);
  if (msg_idx_str.match("\^[0-9]")) {
    var msg_idx = parseInt(msg_idx_str);

    if (msg_idx < allMsgs.length && msg_idx >= 0) {
      res.json({
        "code": 1,
        "mdg": allMsgs[msg_idx]
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
  res.json(allMsgs.length);
});

app.get("/msg/getAll", (req, res) => {
  res.json(allMsgs);
});

app.get("/msg/post/*", (req, res) => {
  var msg = unescape(req.url.substr(10));
  allMsgs.push(msg);
  res.json(allMsgs.length - 1);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}...`);
});
