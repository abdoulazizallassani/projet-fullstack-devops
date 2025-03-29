import express from 'express';
import {
    createTask,
    deleteTask,
    getAllTasks,
    getTaskById,
    updateTask
} from '../controllers/TaskController.js';
import { validateTaskDataMiddleware } from '../middlewares/ValidationSchemas.js';

const router = express.Router();

// Middleware de logging pour toutes les requêtes (facultatif mais utile)
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});

// Routes RESTful pour les tâches
router.post('/createTask', validateTaskDataMiddleware, createTask);
router.get('/getAllTasks', getAllTasks);
router.get('/getTaskById/:id', getTaskById);
router.put('/updateTask/:id', validateTaskDataMiddleware, updateTask);
router.delete('/deleteTask/:id', deleteTask);

export default router; // Exporte le routeur pour l'utiliser dans le serveur
