import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import connectDB from './config/db';
// Importation des routes
import projectRoutes from './routes/ProjectRoute';
import statusRoutes from './routes/StatusRoute';
import taskRoutes from './routes/TaskRoute';
import userRoutes from './routes/UserRoute';
dotenv.config();
console.log('Variables d\'environnement chargées');
const app = express();
// Connexion à MongoDB
connectDB().then(() => {
    console.log('Connexion à MongoDB réussie');
}).catch(err => {
    console.error('Erreur de connexion à MongoDB:', err);
});
// Utilisation de helmet pour sécuriser les headers HTTP
app.use(helmet());
// Utilisation de cors pour gérer les CORS
app.use(cors());
// Middleware pour parser le JSON
app.use(express.json());
// Définition des routes API
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/statuses', statusRoutes);
app.use('/api/projects', projectRoutes);
// Route d'accueil
app.get('/', (req, res) => {
    console.log('Route d\'accueil atteinte');
    res.send('Bienvenue sur l\'API TaskFlow');
});
export default app;
