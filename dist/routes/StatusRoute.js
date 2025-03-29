import express from 'express';
import { createStatus, deleteStatus, getAllStatuses, getStatusById, updateStatus } from '../controllers/StatusController';
import { validateStatusDataMiddleware } from '../middlewares/ValidationSchemas';
const router = express.Router();
router.post('/createStatus', validateStatusDataMiddleware, createStatus);
router.get('/getAllStatuses', getAllStatuses);
router.get('/getStatusById/:id', getStatusById);
router.put('/updateStatus/:id', validateStatusDataMiddleware, updateStatus);
router.delete('/deleteStatus/:id', deleteStatus);
export default router; // Exporte le routeur pour l'utiliser dans le serveur
