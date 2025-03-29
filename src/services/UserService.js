import User from '../models/User.js';

class UserService {
  // Méthode pour créer un utilisateur
  static async createUser(data) {
    return await new User(data).save();
  }

  // Méthode pour obtenir tous les utilisateurs
  static async getAllUsers() {
    return await User.find();
  }

  // Méthode pour obtenir un utilisateur par son ID
  static async getUserById(id) {
    const user = await User.findById(id);
    if (!user) throw new Error('Utilisateur non trouvé');
    return user;
  }

  // Méthode pour mettre à jour un utilisateur
  static async updateUser(id, data) {
    const user = await User.findByIdAndUpdate(id, data, { new: true });
    if (!user) throw new Error('Utilisateur non trouvé');
    return user;
  }

  // Méthode pour supprimer un utilisateur
  static async deleteUser(id) {
    const user = await User.findByIdAndDelete(id);
    if (!user) throw new Error('Utilisateur non trouvé');
  }
}

export default UserService;
