import ProjectService from '../services/ProjectService';
import { handleError } from '../utils/ErrorHandler';
// **Créer un projet**
export const createProject = async (req, res) => {
    try {
        const newProject = await ProjectService.createProject(req.body); // Appel du service pour créer le projet
        res.status(201).json(newProject); // Retourne le projet créé
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs via la fonction centralisée
    }
};
// **Obtenir tous les projets**
export const getAllProjects = async (req, res) => {
    try {
        const projects = await ProjectService.getAllProjects(); // Appel du service pour obtenir tous les projets
        res.status(200).json(projects); // Retourne les projets
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs via la fonction centralisée
    }
};
// **Obtenir un projet par son ID**
export const getProjectById = async (req, res) => {
    try {
        const project = await ProjectService.getProjectById(req.params.id); // Appel du service pour obtenir le projet par ID
        res.status(200).json(project); // Retourne le projet trouvé
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs via la fonction centralisée
    }
};
// **Mettre à jour un projet**
export const updateProject = async (req, res) => {
    try {
        const updatedProject = await ProjectService.updateProject(req.params.id, req.body); // Appel du service pour mettre à jour le projet
        res.status(200).json(updatedProject); // Retourne le projet mis à jour
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs via la fonction centralisée
    }
};
// **Supprimer un projet**
export const deleteProject = async (req, res) => {
    try {
        await ProjectService.deleteProject(req.params.id); // Appel du service pour supprimer le projet
        res.status(200).json({ message: 'Project deleted' }); // Message de succès
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs via la fonction centralisée
    }
};
