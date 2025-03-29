import User from '../models/User';
class UserService {
    static async createUser(data) {
        return await new User(data).save();
    }
    static async getAllUsers() {
        return await User.find();
    }
    static async getUserById(id) {
        const user = await User.findById(id);
        if (!user)
            throw new Error('Utilisateur non trouvé');
        return user;
    }
    static async updateUser(id, data) {
        const user = await User.findByIdAndUpdate(id, data, { new: true });
        if (!user)
            throw new Error('Utilisateur non trouvé');
        return user;
    }
    static async deleteUser(id) {
        const user = await User.findByIdAndDelete(id);
        if (!user)
            throw new Error('Utilisateur non trouvé');
    }
}
export default UserService;
