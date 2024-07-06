const Todo = require('../models/Todo')
exports.getTodo = async(req, res)=>{
    try{
        //fetching all the todo items from the database

        const todos = await Todo.find({});
        res.status(200).json(
            {
                success:true,
            Data:todos,
            message:"entire todo data is fetched"
            }
        )
    }
    catch(error){
        console.log(error);
        res.status(500).json(
            {
                success:false,
                error:error.message,
                message:'server error'
            }
        )
    }
}

exports.getTodobyid = async(req, res)=>{
    try{
        //fetching all the todo items from the database
          const id = req.params.id;
        const todo = await Todo.findById({_id:id});
        if(!todo){
           return res.status(404).json(
                {
                     success:false,
                     message:"no data found with the given id"
                }
            )
        }
        return res.status(200).json(
            {
                success:true,
                Data :todo,
                message:`todo ${id} data feteched successfully`
            }
        )

    }
    catch(error){
        console.log(error);
        res.status(500).json(
            {
                success:false,
                error:error.message,
                message:'server error'
            }
        )
    }
}