const express=require('express')
const app=express()
const PORT=8080;
app.listen(PORT,() =>{
    console.log("server is running")
})
app.get('/api',(req,res) =>{
    res.send("hello")
})