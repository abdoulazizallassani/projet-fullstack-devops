import UserService from '../services/UserService';
import { handleError } from '../utils/ErrorHandler';
// **Créer un utilisateur**
export const createUser = async (req, res) => {
    try {
        const newUser = await UserService.createUser(req.body);
        res.status(201).json(newUser);
    }
    catch (err) {
        handleError(res, err);
    }
};
// **Obtenir tous les utilisateurs**
export const getAllUsers = async (_req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.status(200).json(users);
    }
    catch (err) {
        handleError(res, err);
    }
};
// **Obtenir un utilisateur par ID**
export const getUserById = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        res.status(200).json(user);
    }
    catch (err) {
        handleError(res, err);
    }
};
// **Mettre à jour un utilisateur**
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await UserService.updateUser(req.params.id, req.body);
        res.status(200).json(updatedUser);
    }
    catch (err) {
        handleError(res, err);
    }
};
// **Supprimer un utilisateur**
export const deleteUser = async (req, res) => {
    try {
        await UserService.deleteUser(req.params.id);
        res.status(200).json({ message: 'Utilisateur supprimé' });
    }
    catch (err) {
        handleError(res, err);
    }
};
