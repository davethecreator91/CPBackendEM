const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
// const tripRouter = require('./controllers/trips.js');
// const router = require('./controllers/trips.js');
const trip = require('./models/trip.js');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
// app.use('/trip, tripRouter');
// app.use(logger('dev'));

// Routes go here

// Create: add a trip
app.post('/trip', async (req,res) => {
    const newEntry = await trip.create(req.body);
    res.json(newEntry)
});

// Read: get all saved trips
app.get('/trip', async (req, res) => {
    const entries = await trip.find();
    res.json(entries);
});

// Update: Edit a trip
app.put('/trip/:id', async (req, res) => {
    const updatedEntry = await trip.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.json(updatedEntry);
});

// Delete: remove a trip
app.delete('/trip/:id', async (req,res) => {
    const deletedEntry = await trip.findByIdAndDelete(req.params.id);
    res.json(deletedEntry);
});
















app.listen(3001, () => {
  console.log('The express app is ready!');
});
