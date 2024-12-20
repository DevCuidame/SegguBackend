const BeneficiaryRepository = require('../repositories/beneficiaries.repository');

class BeneficiaryService {
  getAll() {
    return BeneficiaryRepository.findAll();
  }

  getById(id) {
    return BeneficiaryRepository.findById(id);
  }

  create(data) {
    return BeneficiaryRepository.create(data);
  }

  update(id, data) {
    return BeneficiaryRepository.update(id, data);
  }

  delete(id) {
    return BeneficiaryRepository.delete(id);
  }
}

module.exports = new BeneficiaryService();
