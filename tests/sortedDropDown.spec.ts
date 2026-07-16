import { test,expect, Locator } from "@playwright/test";
import { text } from "node:stream/consumers";

test("verify drop down is sorted",async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

//#animals>option

const dropdownOptions:Locator = page.locator("#animals>option");
//const dropdownOptions:Locator = page.locator("#colors>option");
const dropdownText:string[] = (await dropdownOptions.allInnerTexts()).map(text=>text.trim());
console.log(dropdownText);

const OriginalList = [...dropdownText];
const sortedList = [...dropdownText].sort();

expect(OriginalList).toEqual(sortedList);
})