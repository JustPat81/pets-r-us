/*
* ============================================
* Title: index.js
* Author: Patrick Wolff
* Date: 19 June 2022
* Modified By: Patrick Wolff
* Description: index.js file to route pages for
* the Pets-R-Us website.
* ===========================================
*/

var express = require("express");
var app = express()

// Route to the pets-r-us landing page
app.get("/index", function(request, response) {
    response.send("Welcome to the Pets-R-Us homepage!");
});


// Route to the grooming page
app.get("/grooming", function(request, response) {
    response.send("Welcome to the Pets-R-Us grooming page.");
});

// Error if page requested in not found
app.use(function(request, response) {
    response.status(404) .send("Page not found!")
});

app.listen(3000);