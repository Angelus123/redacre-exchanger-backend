import express from 'express';
import pagination from '../../utils/pagination.js';
import exchanges from "../../models/exchange.js";
import {getExchanges, getExchange, updateExchange, addExchange, deleteExchange} from '../../controllers/exchange.js';

 
const router = express.Router();

router 
    .get('/', pagination(exchanges), getExchanges)
    .post('/',addExchange)
    .get('/:id', getExchange)
    .delete('/:id', deleteExchange)
    .put('/:id', updateExchange)

export {router as default}