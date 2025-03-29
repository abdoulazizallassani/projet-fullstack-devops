import express from 'express';
import * as ProjectController from '../controllers/ProjectController';
import { validateProjectDataMiddleware } from '../middlewares/ValidationSchemas';
const router = express.Router();
router.post('/createProject', validateProjectDataMiddleware, ProjectController.createProject); // Créer un projet
router.get('/getAllProjects', ProjectController.getAllProjects); // Obtenir tous les projets
router.get('/getProjectById/:id', ProjectController.getProjectById); // Obtenir un projet par ID
router.put('/updateProject/:id', validateProjectDataMiddleware, ProjectController.updateProject); // Mettre à jour un projet
router.delete('/deleteProject/:id', ProjectController.deleteProject); // Supprimer un projet
export default router;
