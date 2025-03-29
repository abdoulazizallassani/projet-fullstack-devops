import mongoose from 'mongoose';

// Schéma Mongoose pour la tâche
const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },      // Titre de la tâche requis
    description: { type: String, required: true }, // Description de la tâche requise
    status: { type: String, required: true, enum: ['pending', 'in-progress', 'completed'] }, // Statut limité à ces valeurs
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Référence à l'utilisateur (avec ObjectId)
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true } // Référence au projet (avec ObjectId)
  },
  { timestamps: true } // Gestion des dates de création et de mise à jour automatiques
);

// Création du modèle Mongoose pour la tâche
const Task = mongoose.model('Task', taskSchema);

export default Task; // Exporte le modèle Task
