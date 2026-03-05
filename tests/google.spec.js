const{test,expect}=require('@playwright/test')

test("Verify Application Title", async ({page})=>{
    await page.goto("https://google.com")
    const url = await page.url()
    console.log("Title is " + url)
    const title=await page.title()
    console.log("title is"+title)
    await expect(page).toHaveTitle("Google")
})