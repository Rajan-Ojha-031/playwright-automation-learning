const{test,expect}=require('@playwright/test')
test("Verify Error Messg",async function({page})
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

     await page.getByPlaceholder("Username").type("Admin",{delay:200})

    await page.locator("input[name='password']").type("admin1236433",{delay:100})

    await page.locator("//button[normalize-space()='Login']").click()

    const errormessg = await page.locator("//p[contains(@class,'alert-content-text')]").textContent()

    console.log("The error msg is" + errormessg);

    expect(errormessg.includes("Invalid")).toBeTruthy()

    expect(errormessg.includes("Invalid credentials")).toBeTruthy()

})