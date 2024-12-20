const BeneficiaryService = require('../services/beneficiaries.service');

class BeneficiaryController {
  async getAll(req, res) {
    const Beneficiarys = await BeneficiaryService.getAll();
    res.json(Beneficiarys);
  }

  async getById(req, res) {
    const Beneficiary = await BeneficiaryService.getById(req.params.id);
    res.json(Beneficiary);
  }

  async create(req, res) {
    const Beneficiary = await BeneficiaryService.create(req.body);
    res.status(201).json(Beneficiary);
  }

  async update(req, res) {
    const updated = await BeneficiaryService.update(req.params.id, req.body);
    res.json(updated);
  }

  async delete(req, res) {
    const deleted = await BeneficiaryService.delete(req.params.id);
    res.json({ success: deleted });
  }
}

module.exports = new BeneficiaryController();
