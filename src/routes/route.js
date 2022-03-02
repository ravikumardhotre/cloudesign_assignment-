const express = require('express');

const router = express.Router();

const multer= require('multer');

const todoController=require('../controller/todoController')

//create task

router.post('/task',todoController.createtask)

//get task all
/router.get('/task/allYourTasks',todoController.fetchallTodo)

//update task

 router.put('/task/updateTask/:taskId',todoController.updateTask)



module.exports = router