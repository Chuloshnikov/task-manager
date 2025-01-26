import express from "express";
import {  
    getTask, 
    getTasksByAuthor, 
    deleteTask, 
    updateTask, 
    createTask, 
    getAllTasks
} from "../controllers/taskController.js";
import checkAuth from "../middlewares/checkAuth.js";
import checkAdmin from "../middlewares/checkAdmin.js";

const router = express.Router();


//auth checker
router.use(checkAuth);


router.post('/task', createTask);

router.get('/task', getTasksByAuthor);
router.get('/task/all', checkAdmin, getAllTasks);
router.get('/task/:id', getTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);


export default router;