// Gestion centralisée des erreurs
export const handleError = (res, err) => {
    console.error('❌ Erreur:', err);
    // Déterminer le message d'erreur
    const message = err instanceof Error ? err.message : 'Une erreur inconnue est survenue';
    // Vérifier les types d'erreurs et ajuster la réponse en conséquence
    if (err instanceof Error && err.message === 'Utilisateur non trouvé') {
        return res.status(404).json({ message: 'Utilisateur non trouvé', error: message });
    }
    if (err instanceof Error && err.message === 'Validation échouée') {
        return res.status(400).json({ message: 'Les données fournies sont invalides', error: message });
    }
    // Par défaut, retourner une erreur serveur interne
    res.status(500).json({ message: 'Erreur interne du serveur', error: message });
};
