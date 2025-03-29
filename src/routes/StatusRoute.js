import express from 'express';
import {
    createStatus,
    deleteStatus,
    getAllStatuses,
    getStatusById,
    updateStatus
} from '../controllers/StatusController.js';
import { validateStatusDataMiddleware } from '../middlewares/ValidationSchemas.js';

const router = express.Router();

// Middleware de logging pour toutes les requêtes (facultatif mais utile)
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});

// Routes RESTful pour les statuts
router.post('/createStatus', validateStatusDataMiddleware, createStatus);
router.get('/getAllStatuses', getAllStatuses);
router.get('/getStatusById/:id', getStatusById);
router.put('/updateStatus/:id', validateStatusDataMiddleware, updateStatus);
router.delete('/deleteStatus/:id', deleteStatus);

export default router; // Exporte le routeur pour l'utiliser dans le serveur
