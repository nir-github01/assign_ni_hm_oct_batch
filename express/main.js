import express, {urlencoded} from "express";
import categoryroute from "./category.js";
import orderroute from "./orders.js";
import productroute from "./product.js";
const app = express();
const port = 5000;

app.use(express.json());
app.use(urlencoded({extended:true}))

app.use("/shopping", categoryroute);
app.use("/shopping", orderroute);
app.use("/shopping", productroute);


app.get('/shopping', (req, res)=>{
    res.setHeader("Content-Type", "text/html");
    res.send("Express working " 
    + "<br>" +"<a href='/shopping/category'>Category</a>"
    + "<br>" +"<a href='/shopping/order'>Order</a>"
    + "<br>" +"<a href='/shopping/product'>Product</a>" )
    //res.send('hello express js');
});

app.post('/shopping/post', (req, res)=>{
res.send("sending post value");
});

app.put('/shopping/put', (req, res)=>{
    res.send("sending put value");
})

app.listen(port, (req, res)=>{
    console.log(`port running successfully on this ${port}`);
});

