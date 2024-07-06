const Todo = require('../models/Todo')
exports.createTodo = async(req, res)=>{
    try{
        //extract the title and the description from the request body
        const {title , description} = req.body;
        //create a new todo object and insert it into the database
        const response = await Todo.create({title, description});

        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created successfully"
            }
        )
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:error.message
            }
        )
    }
}