const express = require('express')
const cors = require('cors')
require('./db/Connection')
const app =  express()
app.use(cors({
    origin:['http://localhost:3000'],
    credentials:true
}));
const PORT = 5000

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Server is Running")
})
app.use('/api/user', require('./Routes/Routes'));
app.use('/api/emp',require('./Routes/empRoutes'));

app.listen(PORT, ()=>{
    console.log("server is runnings: http://localhost:5000")
})

