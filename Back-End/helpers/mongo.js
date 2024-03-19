// mongosync.js: called by 
// https://www.mongodb.com/languages/mongodb-with-nodejs
// mongo pw: 6Ff7ExPhGgfH9KRsysXNd4GU4pHoPQPS
// https://mongoosejs.com/docs/
import mongoose from 'mongoose';
import express from 'express';
import UprightBass from '../models/uprightbass.js'

const app = express();
const DATABASE_URI = "mongodb+srv://liampowers2026:6Ff7ExPhGgfH9KRsysXNd4GU4pHoPQPS@music-sales-webscraper.dbvrd1i.mongodb.net/?retryWrites=true&w=majority"

async function createDocument(obj) {
  //TODO: Check if upright bass or bass guitar.
  const listing = new UprightBass({
    title: obj.title,
    imgLink: obj.imgLink,
    listingLink: obj.listingLink,
    location: obj.location,
    saleStatus: obj.saleStatus,
    price: obj.price,
    year: obj.year
  });

  await listing.save();
  console.log('Added stuff to database!');
}

export default async function addNewListings(objList) {
  await mongoose.connect(DATABASE_URI);
  try {
    console.log("Now adding bass listings to database!");
    objList.forEach((obj) => createDocument(obj));
  }
  catch (error) {
    console.log('error to connect to db in addNewListings: ', error);
  }
  finally {
    await mongoose.connection.close();
    //await mongoose.disconnect();
  }
};

export async function searchListings(params) {
  console.log("Entered searchListings");
  await mongoose.connect(DATABASE_URI);
  try {
    console.log("Now searching for (double) bass listings in database!");
    const contrabassi = await UprightBass.find();
    console.log(contrabassi);
  }
  catch (error) {
    console.log('error to connect to addNewListings: ', error);
  }
  finally {
    console.log("Terminating mongoose.");
    
    await mongoose.connection.close();
  }
};