import { chromium, expect,test } from "@playwright/test";

test("Verify handle tabs",async ()=>{

    const browser= await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://testautomationpractice.blogspot.com/");
    const [page2] = await Promise.all([context.waitForEvent('page'),page1.getByText('New Tab').click()]);

    console.log("page 1 title ----------",await page1.title());
    console.log("Page 2 title ----------",await page2.title());

    const pages= context.pages();
    console.log("--------------------------",pages.length);
    console.log("page 1 title ----------",await pages[0].title());
    console.log("Page 2 title ----------",await pages[1].title());
    
})