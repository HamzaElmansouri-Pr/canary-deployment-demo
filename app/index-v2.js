const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bienvenue sur la version CANARY 🦋');
});

module.exports = app;
