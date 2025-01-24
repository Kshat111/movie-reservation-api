// controllers/reservationController.js
const Reservation = require('../models/Reservation');
const Movie = require('../models/Movie');

const reserveSeats = async (req, res) => {
    const { movieId, showtime, seats } = req.body;
    const reservation = new Reservation({ user: req.user.id, movie: movieId, showtime, seats });
    await reservation.save();
    res.status(201).json(reservation);
};

const getUserReservations = async (req, res) => {
    const reservations = await Reservation.find({ user: req.user.id }).populate('movie');
    res.json(reservations);
};

const cancelReservation = async (req, res) => {
    await Reservation.findByIdAndDelete(req.params.id);
    res.status(204).send();
};

module.exports = { reserveSeats, getUserReservations, cancelReservation };