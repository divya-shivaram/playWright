import {expect,test} from "@playwright/test";
import path from "path"; 

test.only("Flaky test", async({page,context})=>{

        await page.goto('https://demowebshop.tricentis.com/login');
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.getByRole('textbox', { name: 'Password:' }).click();
        await page.getByRole('textbox', { name: 'Email:' }).click();
        await page.waitForTimeout(8000);

        await page.getByRole('textbox', { name: 'Email:' }).fill('admin@gmail.com');
        await page.getByRole('textbox', { name: 'Password:' }).click();
        await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
        await page.getByRole('button', { name: 'Log in' }).click();
        await expect.soft(page.locator('.validation-summary-errors'))
        .toContainText('Login was unsuccessful. Please correct the errors and try again.');


});