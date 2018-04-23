const express = require('express');
const app = express();
var path = require('path');

app.use(express.json());
app.use(express.urlencoded());

const atm = require('./models/atm');

app.get('/withdraw/:amount', (req, res) => {
  let result = atm(req.params.amount);
  res.json(result);
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/src/index.html'));
})

app.post('*', (req, res) => {
  let result = atm(req.body.amount);
  res.json(result);
})

app.listen(process.env.PORT || 8080, console.log("server is listening"));
