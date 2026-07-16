// import { Page, test, expect, BrowserContext } from "@playwright/test";

// let context: BrowserContext;
// let page :Page;

// test.beforeAll("Open application",async ({browser}) => {
//     context = await browser.newContext();
//     page = await context.newPage();
//     await page.goto('https://www.demoblaze.com/index.html');
// })

// test.beforeEach("BeforeEach Test", async ({  }) => {
//     await page.getByRole('link', { name: 'Log in' }).click();
//     await page.locator('#loginusername').fill('admin');
//     await page.locator('#loginpassword').fill('admin');
//     await page.getByRole('button', { name: 'Log in' }).click();
// })

// test.afterEach("AfterEach Test", async ({  }) => {
//     await page.getByRole('link', { name: 'Log out' }).click();
// })

// test("test1", async({}) => {
//     await expect(page.locator('#nameofuser')).toContainText('Welcome admin');
// });

// test("test2", async () => {
//     await expect(page.locator('#nameofuser')).toContainText('Welcome admin');
// });


// test.afterAll("AfterAll Test", async () => {
//     await page.close();
//     await context.close();
// })
