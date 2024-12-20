const ReviewRepository = require('../repositories/reviews.repository');

const ReviewService = {
  getAllReviews: async () => ReviewRepository.getAll(),
  getReviewById: async (id) => ReviewRepository.getById(id),
  createReview: async (reviewData) => ReviewRepository.create(reviewData),
  updateReview: async (id, reviewData) => ReviewRepository.update(id, reviewData),
  deleteReview: async (id) => ReviewRepository.delete(id),
};

module.exports = ReviewService;
