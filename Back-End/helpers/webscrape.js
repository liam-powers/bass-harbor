// webscrape.js (called during GET requests): 
import puppeteer from 'puppeteer';
let browser = await puppeteer.launch(
  {
    headless: false,
    defaultViewport: false,
  });

let objList = [];

export default async function scrapeData(toScrape) {
  if (toScrape.talkBass === true) { // scrape TalkBass data
    await scrapeTalkBassData();
  }

  await browser.close();
  console.log("browser closed");
  return objList;
};

const scrapeTalkBassData = async () => {
  const page = await browser.newPage();
  //TODO: Get higher quality pictures

  await page.goto('https://www.talkbass.com/forums/for-sale-double-basses.144/?prefix_id=1');
  let numPages = await page.$eval("#content > div > div > div.mainContainer > div > div:nth-child(6) > div.PageNav > nav > a:nth-child(5)", el => el.textContent)
  numPages = parseInt(numPages);
  console.log("number of pages obtained to be: ", numPages);

  for (let i = 1; i <= numPages; i++) {
    await page.goto(`https://www.talkbass.com/forums/for-sale-double-basses.144/page-${i}?prefix_id=1`);
    const bassListings = await page.$$(`.discussionListItems .discussionListItem.visible.prefix1`);

    console.log(`num bass listings found in page ${i} = ${bassListings.length}`);

    for (let thread of bassListings) {
      let obj = {}

      obj.title = await thread.$eval('.PreviewTooltip', el => el.textContent);
      const imgRef = await thread.$eval('div.listBlock.posterAvatar > span > a > img', el => el.style.getPropertyValue('background-image'))
      obj.imgLink = 'https://www.talkbass.com/' + imgRef.slice(5, (imgRef.length - 2));
      obj.listingLink = await thread.$eval('div.listBlock.posterAvatar > span > a', el => el.href);

      try {
        obj.location = await thread.$eval('div > div > div.pairsInline > dl:nth-child(3) > dd', el => el.innerText)
      }
      catch (error) {
        obj.location = "location not found";
      }

      obj.saleStatus = await thread.$eval('div > h3 > a.prefixLink > span', el => el.innerText);

      try {
        let price = await thread.$eval('div > div > div.pairsInline > dl:nth-child(1) > dd > big > span', el => el.innerText);
        obj.price = cleanPriceHelper(price);
      }
      catch (error) {
        obj.price = 0;
      }

      obj.year = searchTextForYearHelper(obj.title);
      objList.push(obj)
    }
  }

  console.log("\n\n\n ***** Reached end of scrapeTalkBassData function *****");

  return;
};

const cleanPriceHelper = (price) => {
  price = price.replace(/\$/g, '').replace(/\.\d+/, '').replace(/\./, '').replace(/k/g, '000');
  price = parseInt(price);
  if (isNaN(price)) {
    price = 0;
  }
  return price;
};

const searchTextForYearHelper = (text) => {
  var yearRegex = /\d+/g; // regex to find instance of a numeric value for year in object title div
  var matches = text.match(yearRegex);

  if (matches) {
    matches.forEach(function (num) {
      if ((num > 1500) && (num <= 2025)) { // TODO: fetch current year from host here
        //console.log("Year detected!", num)
        return num;
      }
    });
  }

  //console.log("Year not found");
  return 0;
};