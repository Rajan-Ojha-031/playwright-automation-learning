const{test,expect}=require('@playwright/test')
test.use({viewport:{width:1000,height:800}})

test("Login verify",async function({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").type("Admin",{delay:100})

    await page.locator("input[name='password']").type("admin123",{delay:100})

    await page.locator("//button[@type='submit']").click()

    await page.waitForTimeout(2000)

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").first().click();

    await page.getByText("Logout").click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.waitForTimeout(2000)
})