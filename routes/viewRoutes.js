const express = require("express").Router();
const path = require("path");

// Three html files so three express.gets to the appropriate files

express.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

express.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

express.get("/stats", function(req, res){
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = express;