// webscrape.js: 
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch(
  {
    headless: false,
    defaultViewport: false,
  });

let objList = [];

let makersList = [];// TODO: complete a list of common upright bass makers

const page = await browser.newPage();
await page.goto('https://www.talkbass.com/forums/for-sale-double-basses.144/?prefix_id=1');

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
  obj.price = await thread.$eval('div > div > div.pairsInline > dl:nth-child(1) > dd > big > span', el => el.innerText);
    //TODO: regex price to remove $ and ., convert k
  var regex = /\d+/g;
  var matches = obj.title.match(regex);

  if (matches) {
    matches.forEach(function (num) {
      if ((num > 1500) && (num <= 2023)) { // TODO: fetch current year from host here
        obj.year = num;
      }
    });
  }

  if (!obj.year) {
    obj.year = "N/A";
  }

  objList.push(obj);
}

await browser.close();
export default objList;
console.log(objList); //TODO: export this.