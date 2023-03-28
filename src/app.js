import express from "express";
import cors from "cors";
import morgan from "morgan";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./swaggerOptions.js";
const specs = swaggerJSDoc(options);

import proyectRoutes from "./routes/proyect.js";
import itemRoutes from "./routes/item.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(proyectRoutes);
app.use(itemRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

export default app;