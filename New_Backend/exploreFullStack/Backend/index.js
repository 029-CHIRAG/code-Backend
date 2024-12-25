import express from 'express';

import cors from 'cors'


const app=express();

const port=process.env.PORT || 3000;
app.use(cors());


app.get('/jokes',(req,res)=>{
      const jokes=[{
        id:1,
        title:'a joke',
        content:'This is a joke'
      },
    {
        id:2,
        type:'Another joke',
        content:'This is another joke'
    }]
    console.log(jokes)

    res.send(jokes);
})




app.listen(port,()=>{
    console.log(`Serving at https://localhost:${port}`)
})