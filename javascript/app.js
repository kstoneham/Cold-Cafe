// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

var guestCount = 0;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//create the server to listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

//create an empty array to hold new restraurant guests
  var reservations = [];

  var waitlist = [];

//Create routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "../reservations.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../tables.html"));
});


//Updating new reservation

app.post("/api/reservations", function (req, res) {
    var newGuest = req.body;
    console.log(newGuest);

    guestCount++;
    if (guestCount > 5) {
        waitlist.push(newGuest);
    }
    else {
        reservations.push(newGuest);
    }
    res.json(newGuest);
});

  
