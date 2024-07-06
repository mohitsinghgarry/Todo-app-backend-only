const express = require('express');
const router = express.Router();
const{createTodo} = require('../controllers/createTodo');
const{getTodo,getTodobyid} = require('../controllers/getTodo');
const{updateTodo} = require('../controllers/updateTodo');
const{deleteTodo} = require('../controllers/deleteTodo');
//define api routes
router.post("/createTodo", createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodobyid);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
module.exports = router;