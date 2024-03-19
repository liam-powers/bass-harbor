// Calls handleRequests.js for dev
// import setUpToScrape from "./handleRequests.js";
import { searchListings } from './helpers/mongo.js'

const demoToScrape = {
    talkBass: true,
};

const params = {
};

// setUpToScrape(demoToScrape)
searchListings(params)