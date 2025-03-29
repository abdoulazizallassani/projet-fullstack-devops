import Project from '../models/Project.js';

class ProjectService {
  static async createProject(data) {
    return await new Project(data).save();
  }

  static async getAllProjects() {
    return await Project.find();
  }

  static async getProjectById(id) {
    const project = await Project.findById(id);
    if (!project) throw new Error('Projet non trouvé');
    return project;
  }

  static async updateProject(id, data) {
    const project = await Project.findByIdAndUpdate(id, data, { new: true });
    if (!project) throw new Error('Projet non trouvé');
    return project;
  }

  static async deleteProject(id) {
    const project = await Project.findByIdAndDelete(id);
    if (!project) throw new Error('Projet non trouvé');
  }
}

export default ProjectService;
