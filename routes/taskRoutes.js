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


//YAML!!!

/** 
* @openapi
* '/api/task':
* post:
*    tags:
*    - Task
*    summary: Create a task
*    security:
*      - basicAuth: []
*    requestBody:
*     required: true
*     content:
*       application/json
*         schema:
*           type: array
*           items:
*            type: object
*             properties:
*              description:
*               type: string
*                default: Buy a book
*     responses:
*     201:
*      description: Created
*     400
*       description: Bad Request
*/



router.post('/task', createTask);

/** 
* @openapi
* '/api/task':
* post:
*    tags:
*    - Task
*    summary: Create a task
*    security:
*      - basicAuth: []
*    responses:
*     200:
*      description: Success
*     content:
*       application/json
*         schema:
*           type: array
*           items:
*            type: object
*             properties:
*              id:
*               type: string
*              description:
*               type: string
*              completed:
*               type: boolean
*              createdBy:
*               type: string
*                default: Buy a book
*     400
*       description: Bad Request
*/


router.get('/task', getTasksByAuthor);
router.get('/task/all', checkAdmin, getAllTasks);
router.get('/task/:id', getTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);


export default router;