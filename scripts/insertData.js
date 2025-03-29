// Importation de Mongoose et des modèles
import mongoose from "mongoose"; // Importation de mongoose pour interagir avec MongoDB
import Project from "../src/models/Project"; // Importation du modèle Project
import Status from "../src/models/Status"; // Importation du modèle Status
import Task from "../src/models/Task"; // Importation du modèle Task
import User from "../src/models/User"; // Importation du modèle User

// Fonction pour se connecter à MongoDB
async function connectDB() {
  try {
    // Connexion à MongoDB en utilisant l'URL de la base de données locale
    await mongoose.connect("mongodb://localhost:27017/fstackDevops_db");
    console.log("Connexion réussie à MongoDB"); // Confirmation de la connexion réussie
  } catch (error) {
    // Si une erreur se produit lors de la connexion, elle est affichée ici
    console.error("Erreur de connexion à MongoDB:", error);
  }
}

// Fonction pour insérer un utilisateur dans la base de données
async function createUser() {
  // Création d'un nouvel utilisateur avec des informations fictives
  const user = new User({
    name: "Alice", // Nom de l'utilisateur
    email: "alice@example.com", // Email de l'utilisateur
    password: "password123", // Mot de passe de l'utilisateur (à hacher avant de l'enregistrer)
    role: "user", // Rôle de l'utilisateur (peut être "admin" ou "user")
  });

  // Enregistrement de l'utilisateur dans la base de données
  await user.save();
  console.log("Utilisateur inséré:", user); // Affichage des informations de l'utilisateur inséré
}

// Fonction pour insérer un projet dans la base de données
async function createProject() {
  // Création d'un nouveau projet avec des informations fictives
  const project = new Project({
    name: "Projet Alpha", // Nom du projet
    description: "Un projet qui permettra de tester l'intégration.", // Description du projet
    status: "active", // Statut du projet (par exemple, "active", "inactive", etc.)
  });

  // Enregistrement du projet dans la base de données
  await project.save();
  console.log("Projet inséré:", project); // Affichage des informations du projet inséré
}

// Fonction pour insérer un statut dans la base de données
async function createStatus() {
  // Création d'un nouveau statut
  const status = new Status({
    name: "in-progress", // Nom du statut (par exemple, "in-progress", "completed")
    description: "La tâche est en cours de traitement", // Description du statut
  });

  // Enregistrement du statut dans la base de données
  await status.save();
  console.log("Statut inséré:", status); // Affichage des informations du statut inséré
}

// Fonction pour insérer une tâche dans la base de données
async function createTask() {
  // Recherche de l'utilisateur par email
  const user = await User.findOne({ email: "alice@example.com" });

  // Recherche du projet par son nom
  const project = await Project.findOne({ name: "Projet Alpha" });

  // Si l'utilisateur et le projet sont trouvés
  if (user && project) {
    // Création d'une nouvelle tâche liée à l'utilisateur et au projet
    const task = new Task({
      title: "Développer l'API", // Titre de la tâche
      description: "Créer une API pour gérer les tâches.", // Description de la tâche
      status: "pending", // Statut de la tâche (par exemple, "pending", "in-progress")
      user: user._id, // ID de l'utilisateur assigné à la tâche
      project: project._id, // ID du projet auquel la tâche appartient
    });

    // Enregistrement de la tâche dans la base de données
    await task.save();
    console.log("Tâche insérée:", task); // Affichage des informations de la tâche insérée
  } else {
    // Si l'utilisateur ou le projet n'est pas trouvé, afficher un message d'erreur
    console.log("Utilisateur ou projet non trouvé !");
  }
}

// Fonction principale pour insérer toutes les données
async function insertData() {
  // Connexion à la base de données
  await connectDB();

  // Appel des fonctions pour insérer les données
  await createUser(); // Insérer un utilisateur
  await createProject(); // Insérer un projet
  await createStatus(); // Insérer un statut
  await createTask(); // Insérer une tâche

  // Déconnexion de la base de données après l'insertion
  mongoose.disconnect();
}

// Exécution de la fonction insertData pour insérer les données dans la base de données
insertData();
