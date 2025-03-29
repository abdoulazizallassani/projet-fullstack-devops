import mongoose from 'mongoose';

// Schéma de Mongoose qui définit la structure de l'entité "User"
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },    // Le nom est requis
    age: { type: Number, required: true },     // L'âge est requis
    email: { type: String, required: true, unique: true }, // L'email est requis et unique
    role: { type: String, default: 'user' },   // Valeur par défaut du rôle est 'user'
    password: { type: String, required: true } // Le mot de passe est requis
  },
  { timestamps: true } // Mongoose ajoutera des champs `createdAt` et `updatedAt` automatiquement
);

// Création du modèle Mongoose à partir du schéma
const User = mongoose.model('User', userSchema);

export default User; // Exporte le modèle User pour l'utiliser dans d'autres parties du code
