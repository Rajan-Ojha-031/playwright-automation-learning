const { test, expect } = require('@playwright/test')
test("Working with multiple tabs", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://freelance-learn-automation.vercel.app/login")


    const [newpage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("//div[@class='container-child']//a[4]").click()
    ])

    await newpage.waitForTimeout(5000)

    await newpage.locator("(//input[@name='email'])[2]").fill("rajan911ojha@gmail.com")

    await newpage.waitForTimeout(2000)

    await newpage.close()

    await page.locator("//input[@id='email1']").fill("rajan911ojha@gmail.com")

    await page.waitForTimeout(2000)
})