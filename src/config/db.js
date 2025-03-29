import dotenv from 'dotenv';
import mongoose from 'mongoose'; // Importation correcte de mongoose

// Charger les variables d'environnement
dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);  // Vérification de la variable d'environnement

// Vérifier si l'URI MongoDB est définie
if (!process.env.MONGO_URI) {
  console.error("L'URI MongoDB est manquante dans les variables d'environnement");
  process.exit(1);
}

// Récupérer l'URI MongoDB depuis les variables d'environnement
const mongoUri = process.env.MONGO_URI;

// Fonction pour vérifier si l'utilisateur MongoDB existe
const checkMongoUserExists = async (mongoUri) => {
  try {
    // Créer une connexion avec mongoose
    const conn = await mongoose.createConnection(mongoUri).asPromise();
    const adminDb = conn.db?.admin();
    if (!adminDb) throw new Error("Impossible d'obtenir l'adminDB");

    // Vérifier les utilisateurs MongoDB
    await adminDb.command({ usersInfo: 1 });
    await conn.close();
    return true;
  } catch (error) {
    console.error(`🔴 L'utilisateur MongoDB n'existe pas ou problème d'authentification sur ${mongoUri}`);
    return false;
  }
};

// Fonction pour vérifier et créer la base de données si elle n'existe pas
const ensureDatabasesExist = async (mongoUri) => {
  try {
    // Créer une connexion avec mongoose
    const conn = await mongoose.createConnection(mongoUri).asPromise();
    if (!conn.db) throw new Error("Impossible d'obtenir la base de données");

    const db = conn.db;
    const adminDb = db.admin();
    const databases = await adminDb.listDatabases();
    const dbName = mongoUri.split('/').pop()?.split('?')[0];

    if (dbName && !databases.databases.some((db) => db.name === dbName)) {
      console.log(`🟡 La base '${dbName}' n'existe pas. Création en cours...`);
      const testCollection = db.collection('init_collection');
      await testCollection.insertOne({ message: 'Initialisation de la base' });
      console.log(`🟢 Base '${dbName}' créée avec succès !`);
    } else {
      console.log(`✅ La base '${dbName}' existe déjà.`);
    }

    await conn.close();
  } catch (error) {
    console.error(`🔴 Erreur lors de la vérification/création de la base :`, error);
  }
};

// Connexion à MongoDB
const connectDB = async () => {
  console.log(`🔄 Tentative de connexion à MongoDB : ${mongoUri}`);

  // Vérifier si l'utilisateur MongoDB existe
  if (!(await checkMongoUserExists(mongoUri))) {
    console.error(`❌ Connexion refusée pour ${mongoUri} : vérifiez l'utilisateur et le mot de passe.`);
    return;
  }

  try {
    // Se connecter à MongoDB
    await mongoose.connect(mongoUri);
    console.log(`✅ Connexion réussie à ${mongoUri}`);

    // Vérifier et créer la base de données si nécessaire
    await ensureDatabasesExist(mongoUri);
  } catch (error) {
    console.error(`🔴 Erreur de connexion à ${mongoUri}:`, error.message || error);
  }
};

// Gérer l'arrêt propre de la connexion MongoDB
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('🛑 MongoDB déconnecté');
  process.exit(0);
});

export default connectDB;
