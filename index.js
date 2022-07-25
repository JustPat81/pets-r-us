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

const express = require("express");
const path = require("path");
const app = express()

app.engine(".html", require("ejs").__express);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000 || process.env.PORT;

// Route to the pets-r-us landing page
app.get("/", (req, res) => { 
    res.render("index", {
        title: "Home",
        message: "Welcome to the Pets-R-Us hompage!"
    })
});

// Route to the grooming page
app.get("/grooming", (req, res) => { 
    res.render("grooming", {
        title: "Grooming",
        message: "Welcome to the Pets-R-Us grooming page!"
    })
});

// Error if page requested in not found
app.use(function(request, response) {
    response.status(404) .send("Page not found!")
});

app.listen(3000);