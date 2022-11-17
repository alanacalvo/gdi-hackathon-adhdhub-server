const mongoose = require('../db/connection');

const SessionSchema = new mongoose.Schema(
  {
    sessionName: String,
    sessionLength: Number,
    preSessionTodos: {
      todoItem: [String],
      timeLength: Number
    },
    postSessionTodos: {
      todoItem: [String],
      completed: Boolean,
      notes: String
    }
  }
)

const Session = mongoose.model('Session', SessionSchema);

module.exports = Session;