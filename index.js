const express=require('express')
const app=express()
const PORT=8080;
app.listen(PORT,() =>{
    console.log("server is running")
})
app.get('https://dazzling-bohr-917450.netlify.app/api',(req,res) =>{
    res.send("hello")
})