import express from "express";
const orderroute = express.Router();

orderroute.get('/order', (req, res)=>{
    res.setHeader("Content-Type", "text/html");
    res.send("my shopping Order called");
});

export default orderroute;