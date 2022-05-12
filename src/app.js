import express from'express';
import swaggerUi from'swagger-ui-express';
import swaggerDocument from'../documentation/index.js';
import cors from "cors";
import  routes from'./routes/index.js';
const app = express();
app.use(cors());
app.use(express.json());
app.get("/",(req, res) =>{
    res.status(200).json({message:"Welcome"});
})
app.use('/api/v1/', routes);
app.use(
    '/api/v1/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      swaggerOptions: {
        docExpansion: 'none',
        persistAuthorization: true,
      },
    })
  );
export default app;