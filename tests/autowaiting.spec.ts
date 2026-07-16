import {expect, test} from "@playwright/test";

test("autoWaiting",async({page})=>{

    // test.setTimeout(70000);
    test.slow(); //triple the test timeout (30sec + 30sec + 30sec)  //90 sec
await page.goto("https://demowebshop.tricentis.com/");

// Assertion - 5 sec max wait time
await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
await expect(page.getByText("Welcome to our store")).toBeVisible({timeout:6000});


// action - 3 sec max wait time
await page.locator("#small-searchterms").fill("Laptop",{force:true}); // skip the actionability checks 
await page.locator(".button-1.search-box-button").click({delay:2000});


})