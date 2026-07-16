import { test, expect, Locator } from "@playwright/test";
import console from "console";

test("Multi Select DropDown",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. select option from the drop dowm (4 ways)
    await page.locator("#colors").selectOption(['Red','Blue','Green']);         // using visible text
    await page.locator("#colors").selectOption(['red','blue']);                 // using valuse attibute
    await page.locator("#colors").selectOption([{label:'Red'},{label:'Blue'}]); // using label attibute
    await page.locator("#colors").selectOption([{index:0},{index:1}]);          // using index


    //2. count number of options available in the drop down
    const count =  await page.locator("#colors>option").count();
    console.log(count);
    const count1 = page.locator("#colors>option");
    await expect(count1).toHaveCount(count);


    //3. check an option presesnt in the drop down
    const optionText = (await page.locator("#colors>option").allInnerTexts()).map(text=>text.trim());
    // const optionText = await page.locator("#colors>option").allTextContents();
    console.log(optionText);
    expect(optionText).toContain("Red");

    //4. print option from the drop down
    for(const text of optionText){
    console.log(text);
    }
})