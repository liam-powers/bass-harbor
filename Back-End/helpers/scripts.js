import addNewListings, {deleteAllListings} from "./mongo.js";
import scrapeData from "./webscrape.js";

// deleteAllListings();
const listings = await scrapeData({ talkBass: true });
console.log("listings: ", listings);
addNewListings(listings);