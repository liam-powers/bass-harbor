import express from 'express';
import mongoose from 'mongoose';
import UprightBass from '../models/uprightbass';

const app = express();
mongoose.connect("mongodb+srv://liampowers2026:6Ff7ExPhGgfH9KRsysXNd4GU4pHoPQPS@music-sales-webscraper.dbvrd1i.mongodb.net/?retryWrites=true&w=majority"
, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));;

const filterMiddleware = (req, res, next) => {
    
};
    

// Get from database - also, if a certain amount of time has passed since scraping, THEN scrape again (but ignore duplicates)
app.get('/api/items', filterMiddleware, (req, res) => {
    if (time > amount) {
        scrapeData(req.params);
    };
    UprightBass.find()
        .then(items => res.json(items));
});

app.post('/api/items', (req, res) => {
    const newItem = new UprightBass({
        title: req.body.title,
        imgLink: req.body.imgLink,
        listingLink: req.body.listingLink,
        location: req.body.location,
        saleStatus: req.body.saleStatus,
        price: req.body.price,
        year: req.body.year,
        maker: req.body.maker
    });

    newItem.save().then(item => res.json(item));
});

app.put('/api/items/:id', (req, res) => {
    UprightBass.findById(req.params.id)
        .then(item => {
            item.title = req.body.title;
            item.imgLink = req.body.imgLink;
            item.listingLink = req.body.listingLink;
            item.location = req.body.location;
            item.saleStatus = req.body.saleStatus;
            item.price = req.body.price;
            item.year = req.body.year;
            item.maker = req.body.maker;

            item.save().then(item => res.json(item));
        });
});

app.delete('/api/items/:id', (req, res) => {
    UprightBass.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));