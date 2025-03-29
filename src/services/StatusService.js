import Status from '../models/Status.js';

class StatusService {
  static async createStatus(data) {
    return await new Status(data).save();
  }

  static async getAllStatuses() {
    return await Status.find();
  }

  static async getStatusById(id) {
    const status = await Status.findById(id);
    if (!status) throw new Error('Statut non trouvé');
    return status;
  }

  static async updateStatus(id, data) {
    const status = await Status.findByIdAndUpdate(id, data, { new: true });
    if (!status) throw new Error('Statut non trouvé');
    return status;
  }

  static async deleteStatus(id) {
    const status = await Status.findByIdAndDelete(id);
    if (!status) throw new Error('Statut non trouvé');
  }
}

export default StatusService;
