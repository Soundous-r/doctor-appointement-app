const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');


const app =express();

//middleware
app.use(express.json());
app.use(morgan('dev')); // for logging requests in the console

//routes
app.use('/api/v1/user', require('./routes/userRoutes'));
//port
const port = process.env.PORT || 8080;  
//listen port
app.listen (port, () => {
    console.log(`server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
})
//connect to db
const connectDB = require('./config/DBconnect');
connectDB();