import StatusService from '../services/StatusService';
import { handleError } from '../utils/ErrorHandler';
// **Créer un statut**
export const createStatus = async (req, res) => {
    try {
        const newStatus = await StatusService.createStatus(req.body); // Appel du service pour créer le statut
        res.status(201).json(newStatus); // Retourne le statut créé
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs via la fonction centralisée
    }
};
// **Obtenir tous les statuts**
export const getAllStatuses = async (req, res) => {
    try {
        const statuses = await StatusService.getAllStatuses(); // Appel du service pour obtenir tous les statuts
        res.status(200).json(statuses); // Retourne les statuts
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs via la fonction centralisée
    }
};
// **Obtenir un statut par son ID**
export const getStatusById = async (req, res) => {
    try {
        const status = await StatusService.getStatusById(req.params.id); // Appel du service pour obtenir le statut par ID
        res.status(200).json(status); // Retourne le statut trouvé
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs via la fonction centralisée
    }
};
// **Mettre à jour un statut**
export const updateStatus = async (req, res) => {
    try {
        const updatedStatus = await StatusService.updateStatus(req.params.id, req.body); // Appel du service pour mettre à jour le statut
        res.status(200).json(updatedStatus); // Retourne le statut mis à jour
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs via la fonction centralisée
    }
};
// **Supprimer un statut**
export const deleteStatus = async (req, res) => {
    try {
        await StatusService.deleteStatus(req.params.id); // Appel du service pour supprimer le statut
        res.status(200).json({ message: 'Status deleted' }); // Message de succès
    }
    catch (err) {
        handleError(res, err); // Gestion des erreurs via la fonction centralisée
    }
};
