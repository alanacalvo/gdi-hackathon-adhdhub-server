const express = require('express');
const app = express.Router();
const Session = require('../models/session-model');

module.exports = {
  getToDo: async (req, res) => {
      // console.log(req.query)
      try{
          const data = await Session.findOne({_id: req.query._id})
          console.log(data)
          res.render('App.jsx', {SessionData: data}) //not sure if this is how it should render 
      } catch (err) {
          console.log(err)
      }
  },
  addToDo: async (req, res) => {
      try {
          await Session.create({
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
       } })
          console.log(`To do ${req.body.title} created!`)
          res.redirect('/dashboard')
      } catch (err) {
          console.log(err)
      }
  },
  markComplete: async (req, res) => {
      try {
          await Session.findOneAndUpdate({_id:req.body.id}, {
              status: true
          })
          console.log('Completed Todo')
          res.json('Completed Todo')
      } catch (err) {
          console.log(err)
      }
  },
  markIncomplete: async (reeq, res) => {
      try {
          await Session.findOneAndUpdate({_id:req.body.id}, {
              completed: false
          })
          console.log('Incompleted Todo')
          res.json('Incompleted Todo')
      } catch (err) {
          console.log(err)
      }
  },
  deleteTodo: async (req, res) => {
      console.log(req.body.id)
      try {
          await Session.deleteOne({_id: req.body.id})
          console.log('Deleted Todo')
          res.redirect('/dashboard')
      } catch (error) {
          console.log(err)
      }
  },

}