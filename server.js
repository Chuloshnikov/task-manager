import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import swaggerUI from 'swagger-ui-express';


// Routes
import authRouter from './routes/authRoutes.js'; // Путь к файлу с роутами auth
import taskRouter from './routes/taskRoutes.js'; // Путь к файлу с роутами tasks
import swaggerSpec from './config/swagger.js' //Путь к файлу документации

const app = express();

dotenv.config();

const port = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());


//documentation route
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
// Use Routes
app.use('/api', authRouter);
app.use('/api', taskRouter);




app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});