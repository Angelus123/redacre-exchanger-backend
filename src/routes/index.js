import express from 'express';
import exchangeRoutes from './api/exchange.js';
import liveRoutes from './api/livePrice.js';

const routes = express.Router();

routes.use('/exchange', exchangeRoutes);
routes.use('/live', liveRoutes);

export default routes
