import express from 'express';
import mongoose from 'mongoose';
import UprightBass from './models/uprightbass.js';
import cors from 'cors';

const app = express();
app.use(cors());

mongoose.connect("mongodb+srv://liampowers2026:6Ff7ExPhGgfH9KRsysXNd4GU4pHoPQPS@music-sales-webscraper.dbvrd1i.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));



async function filterMiddleware() {
    let query = {};
    // Check for if upright bass or not
    if (filters.yearsBetween.length > 0) {
        const [startYear, endYear] = yearsBetween;
        query.year = { $gte: startYear, $lte: endYear };
    }
    try {
        const uprights = await UprightBass.find(query);
        return uprights;
    } catch (error) {
        console.error("Error retrieving upright basses: ", error);
        throw error;
    }

};

// Get from database - also, if a certain amount of time has passed since scraping, THEN scrape again (but ignore duplicates)
app.get('/api/items', (request, response) => {
    try {
        const filterParams = request.query.filterParams;
        response.status(200).json(filterParams);
    } catch (error) {
        response.status(404).send("404 error in line 19");
    }
});

app.post('/api/items', (request, response) => {
    const newItem = new UprightBass({
        title: request.body.title,
        imgLink: request.body.imgLink,
        listingLink: request.body.listingLink,
        location: request.body.location,
        saleStatus: request.body.saleStatus,
        price: request.body.price,
        year: request.body.year,
        maker: request.body.maker
    });

    newItem.save().then(item => response.json(item));
});

app.put('/api/items/:id', (request, response) => {
    UprightBass.findById(request.params.id)
        .then(item => {
            item.title = request.body.title;
            item.imgLink = request.body.imgLink;
            item.listingLink = request.body.listingLink;
            item.location = request.body.location;
            item.saleStatus = request.body.saleStatus;
            item.price = request.body.price;
            item.year = request.body.year;
            item.maker = request.body.maker;

            item.save().then(item => response.json(item));
        });
});

app.delete('/api/items/:id', (request, response) => {
    UprightBass.findById(request.params.id)
        .then(item => item.remove().then(() => response.json({ success: true })))
        .catch(err => response.status(404).json({ success: false }));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));