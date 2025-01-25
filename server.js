import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";


// Routes
import authRouter from './routes/authRoutes.js'; // Путь к файлу с роутами

const app = express();

dotenv.config();

const port = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());

// Use Routes
app.use('/api', authRouter);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});