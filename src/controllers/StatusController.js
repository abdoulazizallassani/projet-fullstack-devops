import StatusService from '../services/StatusService.js';
import { handleError } from '../utils/ErrorHandler.js';

// **Créer un statut**
export const createStatus = async (req, res) => {
  try {
    const newStatus = await StatusService.createStatus(req.body); 
    res.status(201).json(newStatus); 
  } catch (err) {
    handleError(res, err);
  }
};

// **Obtenir tous les statuts**
export const getAllStatuses = async (req, res) => {
  try {
    const statuses = await StatusService.getAllStatuses(); 
    res.status(200).json(statuses); 
  } catch (err) {
    handleError(res, err);
  }
};

// **Obtenir un statut par son ID**
export const getStatusById = async (req, res) => {
  try {
    const status = await StatusService.getStatusById(req.params.id); 
    res.status(200).json(status); 
  } catch (err) {
    handleError(res, err);
  }
};

// **Mettre à jour un statut**
export const updateStatus = async (req, res) => {
  try {
    const updatedStatus = await StatusService.updateStatus(req.params.id, req.body); 
    res.status(200).json(updatedStatus); 
  } catch (err) {
    handleError(res, err);
  }
};

// **Supprimer un statut**
export const deleteStatus = async (req, res) => {
  try {
    await StatusService.deleteStatus(req.params.id); 
    res.status(200).json({ message: 'Status supprimé' }); 
  } catch (err) {
    handleError(res, err);
  }
};
