import express from 'express';
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from '../controllers/TaskController';
import { validateTaskDataMiddleware } from '../middlewares/ValidationSchemas';
const router = express.Router();
router.post('/createTask', validateTaskDataMiddleware, createTask);
router.get('/getAllTasks', getAllTasks);
router.get('/getTaskById/:id', getTaskById);
router.put('/updateTask/:id', validateTaskDataMiddleware, updateTask);
router.delete('/deleteTask/:id', deleteTask);
export default router; // Exporte le routeur pour l'utiliser dans le serveur
