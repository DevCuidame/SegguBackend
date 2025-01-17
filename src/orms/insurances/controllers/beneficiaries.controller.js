const BeneficiaryService = require('../services/beneficiaries.service');
const { buildImage } = require('../../../utils/imageHandler');

class BeneficiaryController {
  async getAll(req, res) {
    try {
      const beneficiaries = await BeneficiaryService.getAll();
      res.json(beneficiaries);
    } catch (error) {
      console.error('Error fetching beneficiaries:', error);
      res.status(500).json({ message: 'Error al obtener beneficiarios' });
    }
  }

  async getById(req, res) {
    try {
      const beneficiary = await BeneficiaryService.getById(req.params.id);
      res.json(beneficiary);
    } catch (error) {
      console.error('Error fetching beneficiary:', error);
      res.status(500).json({ message: 'Error al obtener beneficiario' });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;

      // Procesar imagen si está presente
      if (data.img_profile_path) {
        const privename = data.name.replace(/\s+/g, '-').toLowerCase();
        data.img_profile_path = await buildImage(privename, 'imageBeneficiary', data.img_profile_path);
      }

      const beneficiary = await BeneficiaryService.create(data);
      res.status(201).json(beneficiary);
    } catch (error) {
      console.error('Error creating beneficiary:', error);
      res.status(500).json({ message: 'Error al crear beneficiario' });
    }
  }

  async update(req, res) {
    try {
      const updated = await BeneficiaryService.update(req.params.id, req.body);
      res.json(updated);
    } catch (error) {
      console.error('Error updating beneficiary:', error);
      res.status(500).json({ message: 'Error al actualizar beneficiario' });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await BeneficiaryService.delete(req.params.id);
      res.json({ success: deleted });
    } catch (error) {
      console.error('Error deleting beneficiary:', error);
      res.status(500).json({ message: 'Error al eliminar beneficiario' });
    }
  }
}

module.exports = new BeneficiaryController();