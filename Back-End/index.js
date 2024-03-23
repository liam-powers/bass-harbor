import express from 'express';
import mongoose from 'mongoose';
import UprightBass from './models/uprightbass.js';
import cors from 'cors';

const app = express();
app.use(cors());

mongoose.connect("mongodb+srv://liampowers2026:6Ff7ExPhGgfH9KRsysXNd4GU4pHoPQPS@music-sales-webscraper.dbvrd1i.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Get from database - also, if a certain amount of time has passed since scraping, THEN scrape again (but ignore duplicates)
app.get('/api/items', async (request, response) => {
    try {
        const filters = request.query.filters;
        const listings = await UprightBass.find(filters);
        response.send(listings);
    } catch (error) {
        console.error("error on line 20");
        throw error;
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));