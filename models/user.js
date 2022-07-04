const mongoose = require("mongoose");
const passport = require("passport-local-mongoose");

const user = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    email: { type: String, required: true},
});