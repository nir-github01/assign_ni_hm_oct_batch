import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT=3000;
const app=express();


app.get('/',(req,resp)=>{

    fs.readFile(__dirname+"/public/index.html",(err,data)=>{
        resp.setHeader("Content-Type","text/html");
        if(err){
            resp.send("Error: "+err)
        }else{
            resp.send(data)
        }
    });
})
app.get('/',(req,resp)=>{
    fs.readFile(__dirname+'/public/css/style.css',(err,data)=>{
        resp.setHeader("Content-Type","text/css");
        if(err){
            resp.send("Error: "+err)
        }else{
            resp.send(data)
        }
    })
})
app.get('/js',(req,resp)=>{
    fs.readFile(__dirname+'/public/js/app.js',(err,data)=>{
        resp.setHeader("Content-Type","application/json"); 
        if(err){
            resp.send("Error: "+err)
        }else{
            resp.send(data)
        }
    })
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT} STARTED`);
});
