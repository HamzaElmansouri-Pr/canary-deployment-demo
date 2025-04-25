const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bienvenue sur la version Canary 🚀');
});

module.exports = app;
