//npx playwright test --grep '@regression'

// npx playwright test tests/tagging.spec.ts --grep '@regression' // all the regression tests

// npx playwright test tests/tagging.spec.ts --grep-invert @regression" //run only everything other than regression

// npx playwright test tests/tagging.spec.ts --grep "(?=.*@sanity)(?=.*regression)" // run both / And Operation

// npx playwright test tests/tagging.spec.ts --grep "@sanity|@regression" // or operation

// npx playwright test tests/tagging.spec.ts --grep "@sanity" --grep-invert "@regression"

import { test, Page, expect } from "@playwright/test";

test("Open application 1", {tag:'@sanity'}, async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
});

test("Open application 2", {tag:'@sanity'}, async ({ page ,browserName}) => {
    await page.goto('https://demowebshop.tricentis.com/login');
});

test("Open application 3",{tag:['@regression','@sanity']}, async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
});

test("Open application 4", {tag:'@regression'},async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
});

test("Open application 5", {tag:['@regression','@sanity']},async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
});