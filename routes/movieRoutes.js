// routes/movieRoutes.js
const express = require('express');
const { addMovie, updateMovie, deleteMovie, getMovies } = require('../controllers/movieController');
const { isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', isAdmin, addMovie);
router.put('/:id', isAdmin, updateMovie);
router.delete('/:id', isAdmin, deleteMovie);
router.get('/', getMovies);

module.exports = router;