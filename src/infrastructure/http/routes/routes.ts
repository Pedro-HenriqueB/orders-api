import { Router, Request, Response } from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const router = Router();

router.use('/api-docs', swaggerUi.serve);
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Orders Api',
      version: '1.0.0'
    },
  },
  apis: ['./src/infrastructure/http/routes/*.js']
}
const saggerSpecs = swaggerJsDoc(options);
router.get('/api-docs', swaggerUi.setup(saggerSpecs, {explorer: true}));

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hi from express' });
});

export default router;
