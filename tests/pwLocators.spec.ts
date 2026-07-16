// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

import {test, expect, Locator} from "@playwright/test"
import { link } from "fs";

test("Verify playwright builtIn Locators", async({page})=>{
// await page.goto("https://nopcommerce.com/");

// const logo:Locator = page.getByAltText("nopCommerce");
// await expect(logo).toBeVisible();

// // const text:Locator = page.getByText("Welcome to our store");
// await expect(page.getByText("Free and open-source eCommerce platform")).toBeVisible();
// await expect(page.getByText("Free and open-source eCom")).toBeVisible();

// // await page.getByRole("link",{name: 'Get started'}).first().click();
// // await expect(page.getByRole("heading",{name:'Get started'})).toBeVisible();

await page.goto("https://www.nopcommerce.com/en/demo?srsltid=AfmBOorOMDuNIVHgTZaxu3ZARbzkGiZBDiPRn9qdLcH7vUE5GaTy2gOU");
const links:Locator = page.getByRole("link");
console.log("First Element ---------------",await links.first().textContent());
console.log("Last Element ---------------",await links.last().textContent());
console.log("nth Element ---------------",await links.nth(3).textContent())
console.log(await links.allTextContents());

let linkss:string[] = await links.allTextContents();
for (let ls of linkss){
    console.log(ls);
}

})