const express = require("express");

const app = express();

app.use((req, res) => {
	res.json({message : "votre requette à bien été reçue !"})
})

module.exports = app;

