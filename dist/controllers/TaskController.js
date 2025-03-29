import TaskService from '../services/TaskService';
import { handleError } from '../utils/ErrorHandler';
// **Créer une tâche**
export const createTask = async (req, res) => {
    try {
        const newTask = await TaskService.createTask(req.body); // Appel du service pour créer la tâche
        res.status(201).json(newTask); // Retourne la tâche créée
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs
    }
};
// **Obtenir toutes les tâches**
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskService.getAllTasks(); // Appel du service pour obtenir toutes les tâches
        res.status(200).json(tasks); // Retourne les tâches
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs
    }
};
// **Obtenir une tâche par son ID**
export const getTaskById = async (req, res) => {
    try {
        const task = await TaskService.getTaskById(req.params.id); // Appel du service pour obtenir la tâche par ID
        res.status(200).json(task); // Retourne la tâche trouvée
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs
    }
};
// **Mettre à jour une tâche**
export const updateTask = async (req, res) => {
    try {
        const updatedTask = await TaskService.updateTask(req.params.id, req.body); // Appel du service pour mettre à jour la tâche
        res.status(200).json(updatedTask); // Retourne la tâche mise à jour
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs
    }
};
// **Supprimer une tâche**
export const deleteTask = async (req, res) => {
    try {
        await TaskService.deleteTask(req.params.id); // Appel du service pour supprimer la tâche
        res.status(200).json({ message: 'Tâche supprimée' }); // Retourne un message de succès
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs
    }
};
