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


//auth checker
router.use(checkAuth);


router.post('/task', createTask);

router.get('/task', getTasksByAuthor);
router.get('/task/:id', getTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);


export default router;