const mongoose = require("mongoose");
mongoose.set('strictQuery',false)
mongoose.connect("mongodb://127.0.0.1/dynamic", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successfull...")
}).catch((err)=>{
    console.log(err);
})