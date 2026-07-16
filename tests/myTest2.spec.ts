import {test, expect} from '@playwright/test';

/* test ("title", ()=>{
//step 1
//step 2
//step 3
}) */

https://automationexercise.com

//fixture - global variables -- page, browser, 
test ("Verify Page URL",async ({page})=>{
await page.goto("https://automationexercise. com");

let pageURL:string = await page.url();
console.log("URL :", pageURL);

await expect(page).toHaveURL("https://automationexercise.com");
})