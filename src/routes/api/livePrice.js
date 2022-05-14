import express from 'express';
import {getLivePrices, getLivePrice, updateLivePrice, addLivePrice, deleteLivePrice} from '../../controllers/LivePrice.js';

 
const router = express.Router();

router 
    .get('/', getLivePrices)
    .post('/',addLivePrice)
    .get('/:id', getLivePrice)
    .delete('/:id', deleteLivePrice)
    .patch('/:id', updateLivePrice)

export {router as default}