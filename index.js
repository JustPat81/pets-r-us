var express = require("express");
var app = express()

app.get("/index", function(request, response) {
    response.send("Welcome to the Pets-R-Us homepage!");
});

app.get("/grooming", function(request, response) {
    response.send("Welcome to the Pets-R-Us grooming page.");
});

app.use(function(request, response) {
    response.status(404) .send("Page not found!")
});

app.listen(3000);