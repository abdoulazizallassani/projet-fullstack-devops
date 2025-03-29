import express from 'express';
import {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser
} from '../controllers/UserController.js';
import { validateUserDataMiddleware } from '../middlewares/ValidationSchemas.js';

const router = express.Router();

// Middleware de logging pour toutes les requêtes
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});

// Routes RESTful
router.post('/createUser', validateUserDataMiddleware, createUser);
router.get('/getAllUsers', getAllUsers);
router.get('/getUserById/:id', getUserById);
router.put('/updateUser/:id', validateUserDataMiddleware, updateUser);
router.delete('/deleteUser/:id', deleteUser);

export default router;
