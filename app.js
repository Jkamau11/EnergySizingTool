const express = require('express'); // import express package

const app = express()// calling the fisrt instance of express package
const path = require('path');
// app.use(express.static('./Index'))

const PORT = 3000;
const HostName = 'localhost';

const staticPath = path.join(__dirname, './Index');

app.use(express.static(staticPath));

app.listen( PORT, HostName, ()=>{
    console.log(`Server running on ${HostName} : ${PORT}`);
    console.log(staticPath);
})

app.get('/energy', (req , res)=>{
    //express.static(path.join(__dirname,  '/Index/index.html'));
    res.sendFile(__dirname + "/Index/index.html");
    //app.use(express.static(staticPath));
})

// .then( () =>{
//     app.get('/energy', ()=>{
//         reset.sendFile(__dirname + "/Resources/Index/index.html")
//     })
// })
// .catch(err => console.log(err))

