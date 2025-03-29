import express from 'express';
import * as ProjectController from '../controllers/ProjectController.js';
import { validateProjectDataMiddleware } from '../middlewares/ValidationSchemas.js';

const router = express.Router();

// Middleware de logging pour toutes les requêtes (facultatif mais utile)
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});

// Routes RESTful pour les projets
router.post('/createProject', validateProjectDataMiddleware, ProjectController.createProject); // Créer un projet
router.get('/getAllProjects', ProjectController.getAllProjects); // Obtenir tous les projets
router.get('/getProjectById/:id', ProjectController.getProjectById); // Obtenir un projet par ID
router.put('/updateProject/:id', validateProjectDataMiddleware, ProjectController.updateProject); // Mettre à jour un projet
router.delete('/deleteProject/:id', ProjectController.deleteProject); // Supprimer un projet

export default router; // Exporte le routeur pour l'utiliser dans le serveur
