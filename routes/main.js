const express = require('express')
const router = express.Router()
const sessionController = require('../controllers/sessionController')
const todosController = require('../controllers/sessionController')
const userController = require('../controllers/userController')
// const authController = require('../controllers/auth')
// const authMiddleware = require('../middleware/auth')

router.get('/', sessionController.getToDo)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router
