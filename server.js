import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";


// Routes
import authRouter from './routes/authRoutes.js'; // Путь к файлу с роутами auth
import taskRouter from './routes/taskRoutes.js'; // Путь к файлу с роутами tasks

const app = express();

dotenv.config();

const port = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());

// Use Routes
app.use('/api', authRouter);
app.use('/api', taskRouter);


app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});