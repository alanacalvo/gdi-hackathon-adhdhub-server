const express = require('express');
const app = express.Router();
const Session = require('../models/session-model');

app.get('/', (req,res) => {
  Session.find({})
  .then(sessions => res.send(sessions))
  .catch(console.error)
})

module.exports = app;