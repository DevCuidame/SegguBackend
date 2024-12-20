const ActiveRepository = require('../repositories/actives.repository');

class ActiveService {
  getAll() {
    return ActiveRepository.findAll();
  }

  getById(id) {
    return ActiveRepository.findById(id);
  }

  create(data) {
    return ActiveRepository.create(data);
  }

  update(id, data) {
    return ActiveRepository.update(id, data);
  }

  delete(id) {
    return ActiveRepository.delete(id);
  }
}

module.exports = new ActiveService();
