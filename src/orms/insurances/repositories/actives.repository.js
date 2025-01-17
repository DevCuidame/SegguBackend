const Active = require('../models/actives.model');

class ActiveRepository {
  async findAll() {
    return await Active.findAll();
  }

  async findById(id) {
    return await Active.findByPk(id);
  }

  async create(data) {
    const active =  await Active.create(data);
    return active.active_id;
  }

  async update(id, data) {
    const active = await this.findById(id);
    if (active) {
      return await active.update(data);
    }
    return null;
  }

  async delete(id) {
    const active = await this.findById(id);
    if (active) {
      await active.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new ActiveRepository();
