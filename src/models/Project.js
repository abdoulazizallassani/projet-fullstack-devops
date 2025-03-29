import mongoose from 'mongoose';

// Schéma Mongoose pour le projet
const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },      // Le nom du projet est requis
    description: { type: String, required: true }, // La description est requise
    status: { type: String, required: true, enum: ['active', 'inactive'] } // Le statut est limité à ces valeurs
  },
  { timestamps: true } // Enregistre les dates de création et de mise à jour
);

// Création du modèle Mongoose pour le projet
const Project = mongoose.model('Project', projectSchema);

export default Project; // Exporte le modèle Project
