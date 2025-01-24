// routes/reservationRoutes.js
const express = require('express');
const { reserveSeats, getUserReservations, cancelReservation } = require('../controllers/reservationController');
const router = express.Router();

router.post('/', reserveSeats);
router.get('/user', getUserReservations);
router.delete('/:id', cancelReservation);

module.exports = router;