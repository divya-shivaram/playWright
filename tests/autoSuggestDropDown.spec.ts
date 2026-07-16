import { test, expect, Locator } from "@playwright/test";

test("Auto Suggest drop down", async ({page})=>{

    await page.goto("https://www.flipkart.com/");

    const closePopup =  page.locator(':has-text("✕")');
    await closePopup.first().click();

    const inputSearchBox = page.getByPlaceholder("Search for Products, Brands and More");
    await inputSearchBox.first().fill("smart");
    await page.waitForTimeout(2000);
    
    //cnt+shift+p -> emulate a focused page -> do not emulate focused page
    const options = page.locator("form.lilxh_.header-form-search>ul>li");
    const count = await options.count();
    console.log("-----------------",count,"----------------------");

    let text:(string | null)[] = [];
    for(let i =0;i<count;i++){
        text.push(await options.nth(i).textContent());
    }
    console.log(text);

    for(let i = 0;i<count;i++){
        const text = await options.nth(i).innerText();
        if(text=="smartphone"){
            await options.nth(i).click();
            break;
        }
    }
})