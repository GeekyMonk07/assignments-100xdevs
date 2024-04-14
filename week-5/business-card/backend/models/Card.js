const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  linkedin: String,
  twitter: String,
  otherSocialMedia: String,
  interests: [String],
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
