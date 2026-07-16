import { test, expect, Locator } from "@playwright/test";

test ("Single Select DropDown", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//1. select option from the drop dowm (4 ways)

await page.locator("#country").selectOption('India'); // visible text
await page.locator("#country").selectOption({value:'uk'});  //by useing value attribute
await page.locator("#country").selectOption({label:'India'}); //by using lable 
await page.locator("#country").selectOption({index:3}); //by using index

//2. count number of options available in the drop dowm

const dropdownOptions:Locator = page.locator("#country>option");
await expect(dropdownOptions).toHaveCount(10);

//3. check an option presesnt in the drop down

const optionText:String[] = (await dropdownOptions.allInnerTexts()).map(text=>text.trim());
console.log(optionText);
expect(optionText).toContain('India');

//4. print option from the drop down

for (const option of optionText){
    console.log(option);
}
})