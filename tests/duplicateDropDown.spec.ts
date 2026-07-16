import {test, expect,Locator } from "@playwright/test";

test("Verify Duplicate DropDown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // const dropdownOptions = page.locator("#animal>option"); // no duplicates
    const dropdownOptions = page.locator("#colors>option");  // has duplicates

    const optionsText:string[] = (await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log(optionsText);

    const mySet = new Set<string>(); // duplicates not allowed
    const duplicates:string[]=[];  // allow duplicate

    for (const text of optionsText){
        if(mySet.has(text)){
            duplicates.push(text);
        }else{
            mySet.add(text);
        }
    }
    console.log(mySet);
    console.log(duplicates);

    //expect(duplicates.length).not.toBe(0);
    
})