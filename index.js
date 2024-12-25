// console.log("Hii Chirag");
// to run our index file from backend we will just go in package.json file
//and write in script "start":"node index.js" then or running npm run start in terminal index.js will be executed.
require('dotenv').config()
const express=require('express')
const app=express()
const port=4000


app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.get('/twitter',(req,res)=>{
    res.send("Or bhai kaisa hai.")
})
app.get('/login',(req,res)=>{
    res.send("<h1>You Are Logged In.</h1>")
})
// app.listen(port,()=>{
//     console.log(`Server is running on ${port}`)
// })  //in normal case
// in env case
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${port}`)
})

