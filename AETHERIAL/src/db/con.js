const mongoose = require('mongoose');

const mongoUrl = "mongodb+srv://Krishnas-world:Krishna121@krishas-world.wiflcjl.mongodb.net/?retryWrites=true&w=majority"

// Mongoose connects
mongoose.connect(mongoUrl).then(()=>{
    console.log("MongoDB connected successfully!");
  }).catch((err)=>{
    console.error(err);
  })