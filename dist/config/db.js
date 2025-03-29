import dotenv from 'dotenv';
import mongoose from 'mongoose';
// Charger les variables d'environnement depuis .env
dotenv.config();
// Vérifier si l'URI de MongoDB est définie
if (!process.env.MONGO_URI) {
    console.error('L\'URI MongoDB est manquante dans les variables d\'environnement');
    process.exit(1);
}
// Connexion à MongoDB
const connectDB = async () => {
    try {
        console.log(`Tentative de connexion à MongoDB avec l'URI : ${process.env.MONGO_URI}`);
        // Connexion à MongoDB sans les options obsolètes
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connecté avec succès');
    }
    catch (error) {
        // Vérification du type de l'erreur avant d'accéder à ses propriétés
        if (error instanceof Error) {
            console.error('Erreur de connexion à MongoDB:', error.message);
        }
        else {
            console.error('Erreur inconnue de connexion à MongoDB:', error);
        }
        process.exit(1);
    }
};
// Gérer l'arrêt propre de la connexion MongoDB
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB déconnecté');
    process.exit(0);
});
export default connectDB;
