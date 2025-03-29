import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/UserController';
import { validateUserDataMiddleware } from '../middlewares/ValidationSchemas';
const router = express.Router();
router.post('/createUser', validateUserDataMiddleware, (req, res) => {
    console.log('Requête POST reçue pour créer un utilisateur');
    createUser(req, res); // Appeler la fonction createUser
});
router.get('/getAllUsers', getAllUsers);
router.get('/getUserById/:id', getUserById);
router.put('/updateUser/:id', validateUserDataMiddleware, updateUser); // Utilisation du middleware de validation
router.delete('/deleteUser/:id', deleteUser);
export default router;
