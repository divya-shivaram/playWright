import { chromium, expect, firefox, test, webkit } from "@playwright/test";

test("create Broswer, context and page", async ()=>{
    const browser = await webkit.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const pages = context.pages();
    console.log("-----------",pages.length);

    await page1.goto("https://ui.vision/demo/webtest/frames/");
    await page2.goto("https://ui.vision/demo/webtest/frames/");

})