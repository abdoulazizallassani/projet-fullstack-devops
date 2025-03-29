import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import connectDB from './config/db.js';
import logger from './utils/logger.js';

// Importation des routes
import projectRoutes from './routes/ProjectRoute.js';
import statusRoutes from './routes/StatusRoute.js';
import taskRoutes from './routes/TaskRoute.js';
import userRoutes from './routes/UserRoute.js';

// Chargement des variables d'environnement
dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);  // Vérification de la variable d'environnement
// Vérifier si l'URI MongoDB est bien définie
if (!process.env.MONGO_URI) {
  console.error("L'URI MongoDB est manquante dans les variables d'environnement");
  process.exit(1);
}

// Connexion à la base de données
connectDB()
  .then(() => logger.info('✅ Connexion à MongoDB réussie'))
  .catch(err => {
    logger.error('❌ Erreur de connexion à MongoDB:', err);
    process.exit(1);
  });

const app = express();
logger.info('✅ Express initialisé');

// Sécurité des headers HTTP
app.use(helmet());
app.use(cors());
app.use(express.json());

// Définition des routes
app.use('/api/users', userRoutes);  // Route utilisateur
app.use('/api/tasks', taskRoutes);  // Route tâche
app.use('/api/statuses', statusRoutes);  // Route status
app.use('/api/projects', projectRoutes);  // Route projets

// Route d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API TaskFlow');
});

// Importation du middleware de gestion des erreurs
import { handleError } from './utils/ErrorHandler.js'; // Assure-toi que l'importation est correcte

// Middleware de gestion des erreurs
app.use(handleError);

// Exporter app pour être utilisé dans server.js
export default app;
