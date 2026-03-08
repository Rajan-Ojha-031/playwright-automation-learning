const { test, expect } = require('@playwright/test')
test("HandelAutoSuggestion using keyboard", async function ({ page }) {
    await page.goto("https://www.google.com")

    await page.locator("textarea[name='q']").type("Playwright")

    await page.waitForSelector("//li[@role='presentation']")

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("ArrowDown")

    await page.waitForTimeout(2000)

    await page.keyboard.press("Enter")

    await page.waitForTimeout(5000)
})

test.only("HandelAutoSuggestion uing Loop", async function ({ page }) {
    await page.goto("https://www.google.com")

    await page.locator("textarea[name='q']").type("Playwright")

    await page.waitForSelector("//li[@role='presentation']")

    const element = await page.$$("//li[@role='presentation']")

    for(let i=0;i<element.length;i++)
    {
        const text = await element[i].textContent()
        if(text.includes('github'))
        {
            await element[i].click()
            break
        }
    }


})