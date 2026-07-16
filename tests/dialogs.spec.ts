// Playwright can interact with the web page dialogs such as alert, confirm, prompt 
// as well as beforeunload confirmation. For print dialogs, see Print.

// By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, 
// you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.

import { expect, Locator, test } from "@playwright/test";

test("verify Dialogs - Aleart", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com");

    page.on('dialog',dialog=>{
        console.log("-----------------",dialog.type());
        expect(dialog.type()).toContain("alert");
        console.log("-----------------",dialog.message());
        expect(dialog.message()).toContain("I am an alert box!");
        dialog.accept()}
    );

    const alert = page.getByText("Simple Alert");
    await alert.click();

})

test("verify Dialogs - Confirm", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com");

    page.on('dialog',dialog=>{
        console.log("-----------------",dialog.type());
        expect(dialog.type()).toContain("confirm");
        console.log("-----------------",dialog.message());
        expect(dialog.message()).toContain("Press a button!");
        dialog.accept()}
    );

    const alert = page.getByText("Confirmation Alert");
    await alert.click();

    const message = await page.locator("#demo");
    expect(await message.innerText()).toContain("You pressed OK!")
})

test.only("verify Dialogs - Prompt", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com");

    page.on('dialog',dialog=>{
        console.log("-----------------",dialog.type());
        expect(dialog.type()).toContain("prompt");
        console.log("-----------------",dialog.message());
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");
        dialog.accept("John")}
    );

    const alert = page.getByText("Prompt Alert");
    await alert.click();

    const message = page.locator("#demo");
    expect(await message.innerText()).toContain("Hello John! How are you today?")
})
