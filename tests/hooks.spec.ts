import test from "@playwright/test";

test.beforeEach("BeforeEach Test", async () => {
    console.log("Before Each test")
})

test.afterEach("AfterEach Test", async () => {
    console.log("After Each test")
})

test.beforeAll("BeforeAll Test", async () => {
    console.log("Before All test")
})

test.afterAll("AfterAll Test", async () => {
    console.log("After All test")
})

test("test1", () => {
    console.log("test 1 ------------");
});

test("test2", () => {
    console.log("test 2 ------------");
});

test("test3", () => {
    console.log("test 3 ------------");
});

test("test4", () => {
    console.log("test 4 ------------");
});
