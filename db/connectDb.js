const mongoose = require('mongoose');

const live_url = "mongodb+srv://Jaygopal0075:bdHkCYlC3OtbfMP5@cluster0.02dbbxb.mongodb.net/BlogWeb?retryWrites=true&w=majority"

// const live_url = "mongodb+srv://Jaygopal003:GjMqrNmcquI3iAcn@cluster0.hoey0x3.mongodb.net/BlogWeb?retryWrites=true&w=majority"
// const local_url = mongoose.connect("mongodb://localhost:27017/exp_project")
const connectDB=()=>{
    
    return mongoose.connect(live_url)
     .then(()=>{
         console.log("connection successfully..")
     })
      .catch((err)=>{
         console.log(err)
     })
}



module.exports = connectDB