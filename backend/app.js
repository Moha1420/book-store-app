// VQ5cVmn4fvDnssY7
// VQ5cVmn4fvDnssY7
// mongodb+srv://VQ5cVmn4fvDnssY7:VQ5cVmn4fvDnssY7@cluster0.kcw3w5j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const express=require("express");
const mongoose=require("mongoose");
const router=require("./routes/bookRoutes.js")

const app=express();
app.use(express.json());

//middle ware
// app.use('/',(req,res,next)=>{
//     res.send("this is our starting app ");
// })
app.use('/books',router);


mongoose.connect( "mongodb+srv://VQ5cVmn4fvDnssY7:VQ5cVmn4fvDnssY7@cluster0.kcw3w5j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{console.log("connected database successfully")})
    .then(()=>{app.listen(5000)})
    .catch((error)=>console.log(error));
 