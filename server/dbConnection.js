const mongoose = require("mongoose");
async function dbConnection(){
await mongoose.connect('mongodb+srv://hnegi8984:WSGwHb4qwhpAM249@cluster0.dbmcxsq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("Mongoose connected");
  })
.catch((error) => {
    console.error("Mongoose connection error:", error);
});
}
module.exports=dbConnection;