// seed/seed.js
const mongoose = require('mongoose');
const User = require('../models/User');
const Movie = require('../models/Movie');
const connectDB = require('../config/db');

const seedData = async () => {
    await connectDB();

    await User.deleteMany({});
    const admin = new User({ username: 'admin', password: 'admin123', role: 'admin' });
    await admin.save();

    await Movie.deleteMany({});
    const movie = new Movie({
        title: 'Inception',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
        poster: 'path/to/poster.jpg',
        genre: 'Sci-Fi',
        showtimes: [new Date('2023-10-10T20:00:00'), new Date('2023-10-11T20:00:00')],
    });
    await movie.save();

    console.log('Seed data created');
    mongoose.connection.close();
};

seedData();