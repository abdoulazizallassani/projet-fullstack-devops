// Centralized error handler
const handleError = (err, req, res, next) => {
  // Log the error with context for better debugging
  console.error(`❌ Erreur lors de la requête ${req.method} ${req.url}:`, err);

  // Default error message
  const message = err instanceof Error ? err.message : 'Une erreur inconnue est survenue';

  // Handle specific error messages
  if (err instanceof Error && err.message === 'Utilisateur non trouvé') {
    return res.status(404).json({
      message: 'Utilisateur non trouvé',
      error: message,
    });
  }

  if (err instanceof Error && err.message === 'Validation échouée') {
    return res.status(400).json({
      message: 'Les données fournies sont invalides',
      error: message,
    });
  }

  // Handle other custom error cases
  if (err instanceof Error && err.message.includes('Base de données')) {
    return res.status(503).json({
      message: 'Erreur de connexion à la base de données',
      error: message,
    });
  }

  // Catch-all for all other errors, returning a generic server error
  return res.status(500).json({
    message: 'Erreur interne du serveur',
    error: message,
  });
};

export default handleError;
