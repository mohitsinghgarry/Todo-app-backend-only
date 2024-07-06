const Todo = require('../models/Todo')
exports.updateTodo = async(req, res)=>{
    try{
        const id = req.params.id;
        const{title , description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id :id},
            {title:title ,description:description , updatedAt:Date.now()}
        )
      res.status(200).json(
        {
            success:true,
            Data:todo,
            message:`updated successfully`
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