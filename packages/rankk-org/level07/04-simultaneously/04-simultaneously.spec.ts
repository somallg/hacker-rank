/**
 * Test specs for 04-simultaneously problem
 */

import * as puppeteer from 'puppeteer';

import { solve04Simultaneously } from './04-simultaneously';

xdescribe('04Simultaneously', () => {
  describe('solve04Simultaneously', () => {
    jest.setTimeout(30000);

    it('should return when input ', async () => {
      expect(solve04Simultaneously()).toEqual(1);

      const browser: puppeteer.Browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: true
      });
      const page: puppeteer.Page = await browser.newPage();
      await page.goto('https://www.rankk.org/');

      await page.type('#login input#username', 'somallg');
      await page.type('#login input#passwd', 'pam382jam');
      await page.click('#login input[type="submit"]');

      // await page.waitForNavigation({ timeout: 0 });
      await page.goto('https://www.rankk.org/challenges/simultaneously.py');

      const pre: puppeteer.ElementHandle<Element> | null = await page.$('pre');
      if (pre) {
        const textContent: puppeteer.JSHandle = await pre.getProperty(
          'textContent'
        );
        // tslint:disable-next-line
        console.log(await textContent.jsonValue());
      }

      await page.waitFor(5000);
      await browser.close();
    });
  });
});

// 0 3 7 19 31 34 41 46 47 48
// if (clicked == 768 && cell != document.challenge.c41) fout(); // click 3
// if (clicked == 1792 && cell != document.challenge.c34) fout(); // 7
// if (clicked == 2816 && cell != document.challenge.c47) fout(); // 11
// if (clicked == 3840 && cell != document.challenge.c48) fout(); // 15
// if (clicked == 5632 && cell != document.challenge.c46) fout(); // 22
// if (clicked == 6656 && cell != document.challenge.c3) fout(); // 26
// if (clicked == 7168 && cell != document.challenge.c7) fout(); // 28
// if (clicked == 9216 && cell != document.challenge.c19) fout(); // 36
// if (clicked == 11520 && cell != document.challenge.c0) fout(); // 45
// if (clicked == 14080 && cell == document.challenge.c31) fout(); // 55

// var x = 1;
// var iter = 1;
// var { c0, c3, c7, c19, c31, c34, c41, c46, c47, c48 } = document.challenge;
// var includes = [0, 3, 7, 19, 31, 34, 41, 46, 47, 48];
// while (iter <= 55) {
//   if (iter === 3 && !c41.checked) {
//     move(c41);
//   } else if (iter === 7 && !c34.checked) {
//     move(c34);
//   } else if (iter === 11 && !c47.checked) {
//     move(c47);
//   } else if (iter === 15 && !c48.checked) {
//     move(c48);
//   } else if (iter === 22 && !c46.checked) {
//     move(c46);
//   } else if (iter === 26 && !c3.checked) {
//     move(c3);
//   } else if (iter === 28 && !c7.checked) {
//     move(c7);
//   } else if (iter === 36 && !c19.checked) {
//     move(c19);
//   } else if (iter === 45 && !c0.checked) {
//     move(c0);
//   } else if (iter === 55) {
//     debugger;
//     move(c31);
//     break;
//   } else {
//     while (includes.indexOf(55 - x) > -1) {
//       x++;
//     }
//     var cell = document.challenge['c' + (55 - x)];
//     !cell.checked && move(cell);
//     x++;
//   }
//   iter++;
// }
