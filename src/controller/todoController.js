const todoModel = require('../models/todoModel')

// Create task
const createtask = async function (req, res) {
    try {
        let task = await todoModel.create(req.body)
        
        res.status(200).send({ status: true, data: task })
       
    } catch (err) {
      return  res.status(500).send({ status: false, msg: err.message })
    }
}


// fetch all task
const fetchallTodo = async function (req, res) {

    try {
        let allTask = await todoModel.find({})
     return   res.status(200).send({ status: true, data: allTask })
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}



// update task

const updateTask = async function (req, res) {
    try {
        let task = await todoModel.findByIdAndUpdate(req.params.taskId, req.body,{new:true})
     return   res.status(200).send({ status: true, data: task })
    } catch (err) {
      return  res.status(500).send({ status: false, msg: err.message })
    }
}




module.exports = {
    createtask ,fetchallTodo,updateTask
}