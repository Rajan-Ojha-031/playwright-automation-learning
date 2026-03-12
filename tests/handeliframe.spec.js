const{test,expect}= require('@playwright/test')
test("handel iframes",async ({page}) => {
    await page.goto("http://doc.oracle.com/javase/8/doc/api/")

    const iframe= await page.frameLocator("//frame[@name='packageListFrame']")

    await page.locator("//a[text()='java.applet']").click()

    await page.pause()
})