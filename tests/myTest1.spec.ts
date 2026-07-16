import {test, expect} from '@playwright/test';

/* test ("title", ()=>{
//step 1
//step 2
//step 3
}) */

https://automationexercise.com

//fixture - global variables -- page, browser, 
test ("Verify Page Title",async ({page})=>{
await page.goto("https://automationexercise.com");

let pageTitle:string = await page.title();
console.log("Title :", pageTitle);

await expect(page).toHaveTitle("Automation Exercise");
})