// models/recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  instructions: String,
  videoUrl: String, // Add this line
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
