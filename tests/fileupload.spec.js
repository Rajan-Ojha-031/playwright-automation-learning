const{test,expect}=require('@playwright/test')
const { waitForDebugger } = require('node:inspector')
test ("File Upload",async function({page})
{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("C:/Users/hp/Downloads/myimage.jpeg")
    await page.locator("#file-submit").click()
    await page.waitForTimeout(2000)
    expect(await page.locator("//h3")).toHaveText("File Uploaded!")

    //test case with out uploading any file
    // await page.locator("#file-submit").click()
    // await page.waitForTimeout(2000)
    // expect(await page.locator("//h1")).toHaveText("Internal Server Error")
})