const mongoose = require('mongoose')

const mongo_url = process.env.MONGODB_CONN;

mongoose.connect(mongo_url)
.then(()=>{
    console.log("mongodb conneceted");
}).catch((error)=>{
    console.log("mongodb connetion error : ", error);
})