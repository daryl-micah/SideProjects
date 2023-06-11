const puppeteer = require('puppeteer');

async function start() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.google.com/flights');

  await page.type(
    '#i15 > div.ZGEB9c.yRXJAe.P0ukfb.a4gL0d.TFC9me.PRvvEd.Otspu.iWO5td.BDJ8fb > div:nth-child(3) > div.lJj3Hd.PuaAn > div.peGo5b.ozeT5c > div > input',
    'New Delhi'
  );
  await page.type(
    '#i15 > div.ZGEB9c.yRXJAe.P0ukfb.a4gL0d.TFC9me.PRvvEd.Otspu.iWO5td.BDJ8fb > div:nth-child(3) > div.lJj3Hd.PuaAn > div.peGo5b.ozeT5c > div > input',
    'New York'
  );

  await page.click(
    '#yDmH0d > c-wiz.zQTmif.SSPGKf > div > div:nth-child(2) > c-wiz > div.cKvRXe > c-wiz > div.vg4Z0e > div:nth-child(1) > div.SS6Dqf.POQx1c > div.MXvFbd > div > button > span.VfPpkd-vQzf8d'
  );

  await page.waitForNavigation();

  const airlineElements = await page.$$('#yDmH0d > c-wiz.zQTmif.SSPGKf > div > div:nth-child(2) > c-wiz > div.cKvRXe > c-wiz > div.PSZ8D.EA71Tc > div.FXkZv > div:nth-child(4) > ul > li:nth-child(1) > div > div.yR1fYc > div > div.gKm0ye > div.hF6lYb.sSHqwe.ogfYpf.tPgKwe > span');
  const fareElements = await page.$$('#yDmH0d > c-wiz.zQTmif.SSPGKf > div > div:nth-child(2) > c-wiz > div.cKvRXe > c-wiz > div.PSZ8D.EA71Tc > div.FXkZv > div:nth-child(4) > ul > li:nth-child(1) > div > div.yR1fYc > div > div.BVAVmf.tPgKwe > div.YMlIz.FpEdX.jLMuyc');

  for (let i = 0; i < airlineElements.length; i++) {
    const airlineText = await page.evaluate(element => element.innerText, airlineElements[i]);
    const fareText = await page.evaluate(element => element.innerText, fareElements[i]);

    console.log(`Flight ${i + 1}: Airline - ${airlineText}, Price - ${fareText}`);
  }

  await browser.close();
}

start();
