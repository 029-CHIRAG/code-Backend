require('dotenv').config();

const express=require('express');
const app=express();

const port=4000;

app.get('/',(req,res)=>{
    res.send('Chirag Tomar');
})

app.get('/twiter',(req,res)=>{
    res.send('Twitter Chla le bhai.')
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${port}`)
})