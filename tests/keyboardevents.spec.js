const{test,expect}=require('@playwright/test')
test("keyboard Events", async function({page})
{
    await page.goto("https://www.google.com")

    //await page.locator("textarea[name='q']").type("India")

    await page.locator("textarea[name='q']").focus()

    await page.locator("textarea[name='q']").type("Javascript Examples!")

    await page.keyboard.press("ArrowLeft") //arrow left will move our cursor to left by one

    await page.keyboard.down("Shift")  //.down is used to press and hold any key like here i want to press and hold shift to select a text
    
    for(let i=0;i<8;i++){
        await page.keyboard.press("ArrowLeft") 
    }

    await page.keyboard.up("Shift")

    await page.keyboard.press("Backspace")




/*    await page.keyboard.press("Control+A")

    await page.keyboard.press("Control+C")

    await page.keyboard.press("Backspace")

    await page.keyboard.press("Control+V")

    // await page.keyboard.press("Enter")
*/
})