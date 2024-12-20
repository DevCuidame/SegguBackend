const ActiveService = require('../services/actives.service');

class ActiveController {
  async getAll(req, res) {
    const actives = await ActiveService.getAll();
    res.json(actives);
  }

  async getById(req, res) {
    const active = await ActiveService.getById(req.params.id);
    res.json(active);
  }

  async create(req, res) {
    const active = await ActiveService.create(req.body);
    res.status(201).json(active);
  }

  async update(req, res) {
    const updated = await ActiveService.update(req.params.id, req.body);
    res.json(updated);
  }

  async delete(req, res) {
    const deleted = await ActiveService.delete(req.params.id);
    res.json({ success: deleted });
  }
}

module.exports = new ActiveController();
