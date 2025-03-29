import ProjectService from '../services/ProjectService.js';
import { handleError } from '../utils/ErrorHandler.js';


// **Créer un projet**
export const createProject = async (req, res) => {
  try {
    const newProject = await ProjectService.createProject(req.body); 
    res.status(201).json(newProject); 
  } catch (err) {
    handleError(res, err);
  }
};

// **Obtenir tous les projets**
export const getAllProjects = async (req, res) => {
  try {
    const projects = await ProjectService.getAllProjects(); 
    res.status(200).json(projects);
  } catch (err) {
    handleError(res, err);
  }
};

// **Obtenir un projet par son ID**
export const getProjectById = async (req, res) => {
  try {
    const project = await ProjectService.getProjectById(req.params.id); 
    res.status(200).json(project); 
  } catch (err) {
    handleError(res, err);
  }
};

// **Mettre à jour un projet**
export const updateProject = async (req, res) => {
  try {
    const updatedProject = await ProjectService.updateProject(req.params.id, req.body); 
    res.status(200).json(updatedProject);
  } catch (err) {
    handleError(res, err);
  }
};

// **Supprimer un projet**
export const deleteProject = async (req, res) => {
  try {
    await ProjectService.deleteProject(req.params.id); 
    res.status(200).json({ message: 'Project supprimé' }); 
  } catch (err) {
    handleError(res, err);
  }
};
