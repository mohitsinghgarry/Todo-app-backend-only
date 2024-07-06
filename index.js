const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

//middlewear to parse json request body
app.use(express.json());
//import routes from the todo api
const todoRoutes = require('./routes/Todos')
//mounting the todo api routes
app.use('/api/v1', todoRoutes);



const dbConnect = require('./config/database');
dbConnect();
app.listen(PORT, ()=>{
    console.log(`server started successfully at port ${PORT}`)
})

//default route
app.get('/',(req ,res)=>{
   res.send(`<h1>this is homepage </h1>`)
})