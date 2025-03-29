import TaskService from '../services/TaskService.js';
import { handleError } from '../utils/ErrorHandler.js';

// **Créer une tâche**
export const createTask = async (req, res) => {
  try {
    const newTask = await TaskService.createTask(req.body); 
    res.status(201).json(newTask); 
  } catch (err) {
    handleError(res, err);
  }
};

// **Obtenir toutes les tâches**
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks(); 
    res.status(200).json(tasks); 
  } catch (err) {
    handleError(res, err);
  }
};

// **Obtenir une tâche par son ID**
export const getTaskById = async (req, res) => {
  try {
    const task = await TaskService.getTaskById(req.params.id); 
    res.status(200).json(task); 
  } catch (err) {
    handleError(res, err);
  }
};

// **Mettre à jour une tâche**
export const updateTask = async (req, res) => {
  try {
    const updatedTask = await TaskService.updateTask(req.params.id, req.body); 
    res.status(200).json(updatedTask); 
  } catch (err) {
    handleError(res, err);
  }
};

// **Supprimer une tâche**
export const deleteTask = async (req, res) => {
  try {
    await TaskService.deleteTask(req.params.id); 
    res.status(200).json({ message: 'Tâche supprimée' }); 
  } catch (err) {
    handleError(res, err);
  }
};
