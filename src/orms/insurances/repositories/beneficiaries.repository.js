const Beneficiary = require('../models/beneficiaries.model');

class BeneficiaryRepository {
  async findAll() {
    return await Beneficiary.findAll();
  }

  async findById(id) {
    return await Beneficiary.findByPk(id);
  }

  async create(data) {
    return await Beneficiary.create(data);
  }

  async update(id, data) {
    const Beneficiary = await this.findById(id);
    if (Beneficiary) {
      return await Beneficiary.update(data);
    }
    return null;
  }

  async delete(id) {
    const Beneficiary = await this.findById(id);
    if (Beneficiary) {
      await Beneficiary.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new BeneficiaryRepository();

