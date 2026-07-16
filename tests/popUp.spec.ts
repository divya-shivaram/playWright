import { test,Page } from "@playwright/test";

test("Verify handle tabs",async ({browser})=>{

    // const browser= await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://testautomationpractice.blogspot.com/");
    await Promise.all([page1.waitForEvent('popup'),await page1.locator('#PopUp').click()]);

    const pages= context.pages();
    console.log("--------------------------",context.pages().length);
    console.log("page 1 title ----------", pages[0].url());
    console.log("Page 2 title ----------", pages[1].url());
    // console.log("Page 3 title ----------", pages[2].url());

    for(const pg of pages){
        const title = pg.url();
        if(title.includes("https://playwright.dev/")){
            await pg.close();

        }
    }

    console.log("--------------------------",context.pages().length);
    
})