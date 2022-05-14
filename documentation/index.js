import welcome from'./welcome.js';
import { exchange, createExDefinition } from './exchange.js';
import {livePrice, creatLivePriceDefinition} from'./livePrice.js';
const paths = { ...welcome,  ...exchange, ...createExDefinition,  ...creatLivePriceDefinition, ...livePrice, };
const definitions = { ...createExDefinition, ...creatLivePriceDefinition };


const config = {
  swagger: '2.0',
  info: {
    title: 'REDACRE TEST ',
    description: 'This documentation of the apis for REDACRE tech test for Junior FS Developer',
    version: '1.0.0',
    contact: {
      name: 'IZERE Ange Felix',
      email: 'izerefaifelix@gmail.com',
      url: 'https://vila-coder.netlify.app',
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },

  schemes: ['HTTP', 'HTTPS'],

  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
    ApiKeyAuth: {
      type: 'apiKey',
      name: 'refreshToken',
      in: 'header',
    },
  },

  servers: [
    {
      url: 'http://localhost:3000',
      name: 'DEV',
    },
    {
      url: 'http://localhost:3000/api/v1/exchange',
      name: 'EXCHANGE',
    },
  ],

  paths,
  definitions,
};

export default config;
