import Task from '../models/Task';
class TaskService {
    static async createTask(data) {
        return await new Task(data).save();
    }
    static async getAllTasks() {
        return await Task.find();
    }
    static async getTaskById(id) {
        const task = await Task.findById(id);
        if (!task)
            throw new Error('Tâche non trouvée');
        return task;
    }
    static async updateTask(id, data) {
        const updatedTask = await Task.findByIdAndUpdate(id, data, { new: true });
        if (!updatedTask)
            throw new Error('Tâche non trouvée');
        return updatedTask;
    }
    static async deleteTask(id) {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask)
            throw new Error('Tâche non trouvée');
    }
}
export default TaskService;
