// mongosync.js: called by 
// https://www.mongodb.com/languages/mongodb-with-nodejs
// mongo pw: 6Ff7ExPhGgfH9KRsysXNd4GU4pHoPQPS
import mongoose from 'mongoose';
import express from 'express';
import UprightBass from '../models/uprightbass';
import BassGuitar from '../models/bassguitar';

const app = express();
const dbURI = "mongodb+srv://liampowers2026:6Ff7ExPhGgfH9KRsysXNd4GU4pHoPQPS@music-sales-webscraper.dbvrd1i.mongodb.net/?retryWrites=true&w=majority";

export default function Run() {
  mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
};