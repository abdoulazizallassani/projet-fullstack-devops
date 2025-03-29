import dotenv from 'dotenv';
import app from './app.js'; // On importe l'app définie dans app.js
import { handleError } from './utils/ErrorHandler.js'; // Importation avec accolades
import logger from './utils/logger.js';

// Chargement des variables d'environnement
logger.info('Chargement des variables d\'environnement...');
dotenv.config();

// Vérification de la variable MONGO_URI pour s'assurer qu'elle est correctement définie
if (!process.env.MONGO_URI) {
  logger.error('MONGO_URI est manquante dans les variables d\'environnement.');
  process.exit(1); // Arrêter l'application si l'URI est manquante
} else {
  logger.info(`MONGO_URI chargée: ${process.env.MONGO_URI}`);
}

// Récupération du port depuis .env ou port 3000 par défaut
const port = process.env.PORT || 3000;
logger.info(`Port configuré: ${port}`);

// Middleware de gestion des erreurs
app.use(handleError); // Ajout de la gestion des erreurs après les routes

// Lancer le serveur avec le port configuré
app.listen(port, () => {
  logger.info(`🚀 Serveur démarré sur http://localhost:${port}`);
});
