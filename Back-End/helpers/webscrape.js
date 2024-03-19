// webscrape.js (called during GET requests): 
import puppeteer from 'puppeteer';
let browser = await puppeteer.launch(
  {
    headless: false,
    defaultViewport: false,
  });

let objList = [];
const makersList = [];

export default async function scrapeData (toScrape) {  
  if (toScrape.talkBass === true) { // scrape TalkBass data
    await scrapeTalkBassData();
  }

  await browser.close();
  console.log("browser closed");
  return objList;
}

const scrapeTalkBassData = async () => {
  const page = await browser.newPage();
  await page.goto('https://www.talkbass.com/forums/for-sale-double-basses.144/?prefix_id=1');

  //TODO: Click through all pages
  // await page.click('#content > div > div > div.mainContainer > div > div:nth-child(6) > div.PageNav > nav > a.text'); 
  //TODO: Click "For Sale" button

  const bassListings = await page.$$('.discussionListItems .discussionListItem.visible.prefix1');

  console.log('num bass listings found =', bassListings.length);

  for (const thread of bassListings) {
    let obj = {}

    obj.title = await thread.$eval('.PreviewTooltip', el => el.textContent);
    const imgRef = await thread.$eval('div.listBlock.posterAvatar > span > a > img', el => el.style.getPropertyValue('background-image'))
    obj.imgLink = 'https://www.talkbass.com/' + imgRef.slice(5, (imgRef.length - 2));
    obj.listingLink = await thread.$eval('div.listBlock.posterAvatar > span > a', el => el.href);
    obj.location = await thread.$eval('div > div > div.pairsInline > dl:nth-child(3) > dd', el => el.innerText);
    obj.saleStatus = await thread.$eval('div > h3 > a.prefixLink > span', el => el.innerText);
    var price = await thread.$eval('div > div > div.pairsInline > dl:nth-child(1) > dd > big > span', el => el.innerText);
    price = cleanPriceHelper(price);
    obj.price = price;
    obj.year = searchTextForYearHelper(obj.title);

    objList.push(obj)
  }

  console.log("\n\n\n ***** Reached end of scrapeTalkBassData function *****");

  return;
};

const cleanPriceHelper = (price) => {
  //console.log("Old price (preregex): ", price);
  price = price.replace(/\$/g, '').replace(/\.\d+/, '').replace(/\./, '').replace(/k/g, '000');
  //console.log("New price (cleaned/regexed): ", price);
  return price;
};

const searchTextForYearHelper = (text) => {
  var yearRegex = /\d+/g; // regex to find instance of a numeric value for year in object title div
  var matches = text.match(yearRegex);

  if (matches) {
    matches.forEach(function (num) {
      if ((num > 1500) && (num <= 2023)) { // TODO: fetch current year from host here
        //console.log("Year detected!", num)
        return num;
      }
    });
  }

  //console.log("Year not found");
  return 0;
}