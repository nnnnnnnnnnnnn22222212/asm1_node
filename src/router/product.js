import express from "express";
import { get, getById, create, update, remove } from "../controller/product"
const producRouter = express.Router();
producRouter.get('/products', get)
producRouter.get('/products/:id', getById)
producRouter.post('/products', create)
producRouter.put('/products', update)
producRouter.delete('/products', remove)
export default producRouter