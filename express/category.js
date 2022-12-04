import express from "express";
const categoryroute = express.Router();

categoryroute.get('/category', (req, res)=>{
    res.setHeader("Content-Type", "text/html");
    res.send("my shopping category called");
});

export default categoryroute;