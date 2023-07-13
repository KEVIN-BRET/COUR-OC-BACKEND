const http = require("http");

const server = http.createServer((req, res) => {
  res.end("voila la reponse du serveur mise à jour automatiquement grace à nodemon !");
});

server.listen(process.env.PORT || 3000);

