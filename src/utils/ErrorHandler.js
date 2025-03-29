// Classes personnalisées pour les erreurs
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
  }
}

// Gestion centralisée des erreurs
const handleError = (err, req, res, next) => {
  console.error('❌ Erreur:', err);

  // Cas où l'erreur est une instance d'Error
  if (err instanceof Error) {
    // Gestion des erreurs spécifiques avec des classes personnalisées
    if (err instanceof NotFoundError) {
      return res.status(404).json({ message: err.message, error: err.stack });
    }

    if (err instanceof ValidationError) {
      return res.status(400).json({ message: 'Les données fournies sont invalides', error: err.stack });
    }

    // Gestion des erreurs génériques
    return res.status(500).json({ message: 'Erreur interne du serveur', error: err.stack });
  }

  // Si l'erreur est inconnue ou ne correspond à aucune des classes d'erreurs spécifiques
  return res.status(500).json({ message: 'Erreur inconnue', error: 'Une erreur inconnue est survenue' });
};

// Exportation des classes d'erreur et de la fonction handleError
export { handleError, NotFoundError, ValidationError };
