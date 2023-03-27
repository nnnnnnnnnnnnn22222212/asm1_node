import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import producRouter from './router/product';
const port = 3002
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/Device")
.then(()=> console.log("Thanh cong"))

app.use("/api", producRouter )
app.listen(port, function(){
    console.log(`GO GO GO GO ${port}`)
})
