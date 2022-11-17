const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true})
    .then(instance => console.log(`connected to: ${instance.connections[0].name}`))
    .catch(error => console.log(`failed conn:`, error))

module.exports = mongoose;