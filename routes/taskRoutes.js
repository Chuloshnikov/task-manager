import express from "express";
import {  
    getTask, 
    getTasksByAuthor, 
    deleteTask, 
    updateTask, 
    createTask 
} from "../controllers/taskController.js";
import checkAuth from "../middlewares/checkAuth.js";

const router = express.Router();

router.use(checkAuth);

router.post('/task', createTask);

router.get('/task', getTasksByAuthor);
router.get('/task/:id', getTask);
router.put('/task/:id', updateTask);
router.delete('/task', deleteTask);


export default router;