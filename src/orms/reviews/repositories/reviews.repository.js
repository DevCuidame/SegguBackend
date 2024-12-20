const Review = require('../models/reviews.model');

const ReviewRepository = {
  getAll: async () => Review.findAll(),
  getById: async (id) => Review.findByPk(id),
  create: async (reviewData) => Review.create(reviewData),
  update: async (id, reviewData) => {
    const review = await Review.findByPk(id);
    if (!review) throw new Error('Review not found');
    return review.update(reviewData);
  },
  delete: async (id) => {
    const review = await Review.findByPk(id);
    if (!review) throw new Error('Review not found');
    return review.destroy();
  },
};

module.exports = ReviewRepository;
