// server.js
import dotenv from 'dotenv';
import app from './app'; // Importation de l'application Express
import connectDB from './config/db';
dotenv.config();
// Connexion à la base de données MongoDB
connectDB();
// Démarrage du serveur
const PORT = parseInt(process.env.PORT || "5000", 10);
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
