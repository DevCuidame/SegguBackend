const ReviewService = require('../services/reviews.service');

const ReviewController = {
  getAll: async (req, res) => {
    try {
      const reviews = await ReviewService.getAllReviews();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      const review = await ReviewService.getReviewById(req.params.id);
      if (!review) return res.status(404).json({ error: 'Review not found' });
      res.json(review);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const review = await ReviewService.createReview(req.body);
      res.status(201).json(review);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const review = await ReviewService.updateReview(req.params.id, req.body);
      res.json(review);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      await ReviewService.deleteReview(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ReviewController;
