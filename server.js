const express = require('express');
const app = express();

const atm = require('./models/atm');

app.get('/withdraw/:amount', (req, res) => {
  let result = atm(req.params.amount);
  res.send(result);
})

app.listen(process.env.PORT || 8080, console.log("server is listening"));
