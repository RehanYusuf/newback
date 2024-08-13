require('dotenv').config()

const express = require('express');

var data = {
    id: 123122,
    name: "yUsuf",
    class: 23
}

const app = express();

const port = 4000;

app.get('/',(req,res) =>{
    res.send('Hello World')
})

app.get('/twitter',(req,res)=>{
    res.send('Welcome')
})

app.get('/youtube',(req,res)=>{
    res.send('Youtube Playlist')
})

app.get('/git',(req,res)=>{
    res.json(data)
})

app.listen(process.env.PORT,()=>{
    console.log(`App listening on port ${port}`)
})









