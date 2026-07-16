import { expect, test, Locator, FrameLocator } from "@playwright/test";

test ("verify Frames 1", async ({page})=> {

    await page.goto("https://ui.vision/demo/webtest/frames/frame_1.html");

    const frames = page.frames();
    console.log("frames -------------",frames.length);

    // const frame = page.locator("#id1");
    const frame = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})

    if(frame){
        console.log("Frame present")
         const inputBox = frame.locator("[name='mytext1']");
        await inputBox.fill("Divya");
    }
    else{
        console.log("No Frame present")
    }
})

test.only ("verify inner Frames", async ({page})=> {

    await page.goto("https://ui.vision/demo/webtest/frames/frame_3.html");

    const frames = page.frames();
    console.log("frames -------------",frames.length);
    
    const frame3 = page.frame({url:"https:/ui.vision/demo/webtest/frames/frame_3.html"})

    if(frame3){
        console.log("Frame present")
         const inputBox = frame3.locator("[name='mytext1']");
        await inputBox.fill("Divya");

        const childFrames = frame3.childFrames();
       console.log("---------------------",childFrames.length);
    }
    else{
        console.log("No Frame present")
    }


    //const frame3 = page.frameLocator("[src='https://docs.google.com/forms/d/1k8PNZrtmCzZi6mW6z-9k4_h4ZSFakJLWseITLyAwp9k/viewform?embedded=true']");
   
})