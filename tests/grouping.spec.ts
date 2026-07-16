import {test } from "@playwright/test";

test.describe('group1',async()=>{
    test("test1", ()=>{
        console.log("test 1 ------------");
    });
    test("test2", ()=>{
        console.log("test 2 ------------");
    });
})

test.describe('group2',async()=>{
test("test3", ()=>{
    console.log("test 3 ------------");
});
test("test4", ()=>{
    console.log("test 4 ------------");
});
})