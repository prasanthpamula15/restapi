const express=require('express')
const app=express()
const PORT=process.env||8080;
app.listen(PORT,() =>{
    console.log("server is running")
})