import { firefox, test} from "@playwright/test";

//  fullyParallel: true,

// test.describe.configure({mode:'serial'}); // 1 worked default
// test.describe.configure({mode:'parallel'}) 

// projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//         // fullyParallel: true,
//     },

//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },


// npx playwright test tests/parallel_test.spec.ts --workers 4

// npx playwright test tests/parallel_test.spec.ts --project firefox



test("Open application 1", async ({ page }) => {
    console.log("Test 1 -------------");
});

test("Open application 2", async ({ page ,browserName}) => {
    console.log("Test 2 -------------");
});

test("Open application 3", async ({ page }) => {
    console.log("Test 3 -------------");
});

test("Open application 4",async ({ page }) => {
    console.log("Test 4 -------------");
});

test("Open application 5",async ({ page }) => {
    console.log("Test 5 -------------");
});