const Sessions = require('../models/session-model');
const seedData = require('./session-seeds.json');

console.log(seedData);

Sessions.deleteMany({})
    .then(() => {
        return Sessions.insertMany(seedData);
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    });