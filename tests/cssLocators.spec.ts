import {test, expect, Locator} from "@playwright/test"

/*
CSS -- Cascading Style Sheets

Absolute CSS locator
Relative CSS locator

tag with ID(#), 
Class(.), 
with any other attribute  tag[attribute=value]
class with attribute     tag.class[attribute=value]
*/

test("CSS Locator",async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    await expect(page.locator('.slider-wrapper.theme-default')).toBeVisible();
    await expect(page.locator("#nivo-slider")).toBeVisible();
    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
    await expect(page.locator("a.nivo-imageLink[href='https://www.tricentis.com/speed/']")).toBeVisible();

    const searchText = page.locator('#small-searchterms');
    await searchText.fill('Divya');

    await page.locator("input[value='Search']").click();


})