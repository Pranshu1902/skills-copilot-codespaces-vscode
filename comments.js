// Create web server

// import express
const express = require('express');
const router = express.Router();

// import comment controller
const commentController = require('../controllers/commentController');

// import auth controller
const authController = require('../controllers/authController');

// import comment validator
const commentValidator = require('../validators/commentValidator');

// POST /api/comment/create
router.post('/create', authController.checkLogin, commentValidator.create, commentController.create);

// POST /api/comment/update
router.post('/update', authController.checkLogin, commentValidator.update, commentController.update);

// POST /api/comment/delete
router.post('/delete', authController.checkLogin, commentValidator.delete, commentController.delete);

// GET /api/comment/get
router.get('/get', commentController.get);

module.exports = router;