const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("requette recue !");
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: "votre requette à bien été reçue !" });
  next();
});

app.use((req, res) => {
	console.log('Réponse envoyé avec succès !');
})

module.exports = app;
