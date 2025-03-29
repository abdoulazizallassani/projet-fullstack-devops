import mongoose from 'mongoose';

// Schéma Mongoose pour le statut
const statusSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },      // Nom du statut requis
    description: { type: String, required: true } // Description du statut requise
  },
  { timestamps: true } // Gestion automatique des dates de création et de mise à jour
);

// Création du modèle Mongoose pour le statut
const Status = mongoose.model('Status', statusSchema);

export default Status; // Exporte le modèle Status
