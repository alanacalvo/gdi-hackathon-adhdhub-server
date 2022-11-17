const express = require('express');
const app = express();
const Sessions = require('./controllers/sessionController');


require('dotenv').config();

app.use(express.json());
app.use('/sessions', Sessions);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express running on localhost:${port}`)
});