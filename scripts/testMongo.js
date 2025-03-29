import { MongoClient } from 'mongodb';

// Remplace l'URI si nécessaire, ici pour une connexion locale
const uri = 'mongodb://localhost:27017'; // ou celle du fichier .env
const dbName = 'fstackDevops_db';

async function testMongoConnection() {
  let client: MongoClient | null = null;

  try {
    // Se connecter à MongoDB sans l'option useUnifiedTopology
    client = new MongoClient(uri);
    await client.connect();
    console.log("Connexion réussie à MongoDB!");

    // Accéder à la base de données
    const db = client.db(dbName);

    // Accéder à une collection spécifique (par exemple 'users')
    const collection = db.collection('users');

    // Exemple de recherche (ici, on suppose qu'il y a des documents dans 'users')
    const users = await collection.find().toArray();
    console.log("Users trouvés :", users);

  } catch (err) {
    console.error("Erreur lors de la connexion à MongoDB:", err);
  } finally {
    // Fermer la connexion
    if (client) {
      await client.close();
    }
  }
}

testMongoConnection();
