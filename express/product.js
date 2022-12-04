import express from "express";
const productroute = express.Router();

productroute.get('/product', (req, res)=>{
    res.setHeader("Content-Type", "text/html");
    res.send("my shopping Product called");
});

export default productroute;