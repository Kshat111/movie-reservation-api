// controllers/movieController.js
const Movie = require('../models/Movie');

const addMovie = async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
};

const updateMovie = async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(movie);
};

const deleteMovie = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(204).send();
};

const getMovies = async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
};

module.exports = { addMovie, updateMovie, deleteMovie, getMovies };