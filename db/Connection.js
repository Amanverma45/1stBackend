const mongoose = require('mongoose')
const DB = "mongodb://av478136:1234@ac-kequiul-shard-00-00.4g1o228.mongodb.net:27017,ac-kequiul-shard-00-01.4g1o228.mongodb.net:27017,ac-kequiul-shard-00-02.4g1o228.mongodb.net:27017/Nodejs?ssl=true&replicaSet=atlas-ejvknv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB)
.then(() => console.log("connection start"))
.catch((error) => console.log(error.message))