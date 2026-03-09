const { test, expect } = require('@playwright/test')
test("Handel ALert Test", async function ({ page }) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //every time use first page.on before clicking any alert confirm or prompt

    page.on("dialog", async (d) => {

        expect(d.type()).toContain("alert")

        expect(d.message()).toContain("I am a JS Alert")

        await d.accept()
    })

    await page.locator("//button[normalize-space()='Click for JS Alert']").click()

})

test("Handel Confirm Box", async function ({ page }) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog", async (dialogwindow) => {

        expect(dialogwindow.type()).toContain("confirm")

        expect(dialogwindow.message()).toContain("I am a JS Confirm")


        // await dialogwindow.accept()
        await dialogwindow.dismiss()
    })

    await page.locator("//button[normalize-space()='Click for JS Confirm']").click()

})

test("Handel Prompt Box", async function ({ page }) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog", async (dialogwindow) => {

        expect(dialogwindow.type()).toContain("prompt")

        expect(dialogwindow.message()).toContain("I am a JS prompt")


        await dialogwindow.accept("Rajan")
    })

    await page.locator("//button[normalize-space()='Click for JS Prompt']").click()

    await page.waitForTimeout(5000)
})