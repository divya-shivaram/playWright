import { expect, test,Browser,Page } from "@playwright/test";

test ("verity Authenticated popUp",async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    
    //http://usermame:password@https://the-internet.herokuapp.com/basic_auth
    // await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForLoadState();
    await page.waitForTimeout(5000);



})