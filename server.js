const express = require('express');
const app = express();

const atm = require('./models/atm');

app.get('/withdraw/:amount', (req, res) => {
  let result = atm(req.params.amount);
  res.send(result);
})

console.log("output", atm("429496731590"));

app.listen(8080, console.log("server is listening"));
