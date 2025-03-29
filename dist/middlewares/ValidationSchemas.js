import Joi from 'joi';
// Fonction générique pour valider les données
export const validateData = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({
                message: 'Validation échouée',
                details: error.details.map((err) => err.message),
            });
        }
        next(); // Si la validation passe, continue vers le contrôleur
    };
};
// Schéma de validation de l'utilisateur
export const userValidationSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('admin', 'user').required(),
});
// Schémas de validation pour d'autres entités
export const taskValidationSchema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().optional(),
    projectId: Joi.string().required(),
    status: Joi.string().valid('todo', 'in-progress', 'done').required(),
    dueDate: Joi.date().optional(),
});
export const statusValidationSchema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().optional(),
});
export const projectValidationSchema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().optional(),
    status: Joi.string().valid('active', 'inactive').required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().greater(Joi.ref('startDate')).required(),
});
// Middlewares de validation
export const validateUserDataMiddleware = validateData(userValidationSchema);
export const validateTaskDataMiddleware = validateData(taskValidationSchema);
export const validateStatusDataMiddleware = validateData(statusValidationSchema);
export const validateProjectDataMiddleware = validateData(projectValidationSchema);
