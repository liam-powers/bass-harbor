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
        const filters = request.query;
        let queries = [];

        const keywordQueries = filters.keywords
            ? filters.keywords.map(keyword => ({
                title: { $regex: keyword, $options: 'i' }
            }))
            : [];

        const woodTypeQueries = [];

        if (filters.carved === 'true') {
            woodTypeQueries.push({ title: { $regex: "carved", $options: 'i' } });
        }

        if (filters.hybrid === 'true') {
            woodTypeQueries.push({ title: { $regex: "hybrid", $options: 'i' } });
        }

        if (filters.plywood === 'true') {
            woodTypeQueries.push({ title: { $regex: "ply", $options: 'i' } });
        }

        if (filters.priceRange) {
            const min = filters.priceRange[0];
            const max = filters.priceRange[1];
            const minPrice = min !== undefined ? min : undefined;
            const maxPrice = max !== undefined ? max : undefined;
            
            console.log("minPrice: ", minPrice);
            console.log("maxPrice: ", maxPrice);

            if (maxPrice !== "100000") {
                queries.push({ price: { $gte: minPrice, $lte: maxPrice } });
            } else {
                queries.push({ price: { $gte: minPrice } });
            }
            
        }

        console.log("woodtypequeries: ", woodTypeQueries);

        if (keywordQueries.length > 0 || woodTypeQueries.length > 0) {
            queries.push({ $or: [...keywordQueries, ...woodTypeQueries] });
        }

        console.log("queries: ", queries);

        const listings = queries.length > 0
            ? await UprightBass.find({ $and: queries })
            : await UprightBass.find();

        response.send(listings);
    } catch (error) {
        console.error("error in find request");
        throw error;
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));