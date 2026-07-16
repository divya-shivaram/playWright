import {test, expect, Locator} from "@playwright/test";

test("Text Input Actions", async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const name:Locator = page.getByPlaceholder("Enter Name");

await expect(name).toBeVisible();
await expect(name).toBeEnabled();

const maxlength:any = await name.getAttribute("maxlength");
expect(maxlength).toBe("15");
await name.fill("Divya");

console.log("------------------", await name.inputValue());
const inputName = await name.inputValue();
expect(inputName).toBe("Divya");
})


test("Radio Button Actions", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const radioMale = page.locator("#male");
    const radioFemale = page.locator("#female");
    await radioMale.check();
    await radioFemale.check();
    //expect(await radioFemale.isChecked()).toBe(true);
    await expect(radioFemale).toBeChecked();
    
    })


test.only("CheckBox Actions", async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

// const checkbox = page.getByLabel("Sunday");
// // await checkbox.scrollIntoViewIfNeeded();
// await checkbox.check();
// await checkbox.uncheck();
// await checkbox.check();
// await expect(checkbox).toBeChecked();


const days:string[]= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const allCheckBoxs:Locator[]= days.map(index=> page.getByLabel(index));
expect(allCheckBoxs.length).toBe(7);

for(let checkBox of allCheckBoxs){
    await checkBox.check();
    await expect(checkBox).toBeChecked();
}

for(const checkBox of allCheckBoxs.slice(-3)){
    await checkBox.uncheck();
    await expect( checkBox).not.toBeChecked();
}

for(let checkBox of allCheckBoxs){

    //only not checked
    if(await checkBox.isChecked()){
        await checkBox.check();
    await expect(checkBox).toBeChecked();}
    else
    {//only when checked
    await checkBox.uncheck();
    await expect( checkBox).not.toBeChecked();
    }
}

})