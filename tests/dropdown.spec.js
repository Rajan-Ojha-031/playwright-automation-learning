const{test,expect}=require('@playwright/test')
const { log } = require('console')
test("Select from dropdown",async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("#state").selectOption({value:"Goa"})

    // await page.waitForTimeout(1000)

    await page.locator("#state").selectOption({label:"Bihar"})

    // await page.waitForTimeout(1000)

    await page.locator("#state").selectOption({index:5})

/*    const dddata =await page.locator("#state").textContent()

    console.log("The whole data in the dropdown is " + dddata);

    await expect(dddata.includes("Kerala")).toBeTruthy()
*/
    let state= await page.$("#state")
    let allelement= await state.$$("option")
    let ddstatus = false

    for(let i=0;i<allelement.length;i++)
    {
        let element = allelement[i]
        let value=await element.textContent()

        console.log("The Drop down using for loop"+value);

        if(value.includes("Rajasthan"))
        {
            ddstatus=true
            break
        }
        
    }
    await expect(ddstatus).toBeTruthy()

    await page.locator("#hobbies").selectOption(['Playing','Dancing'])

    await page.waitForTimeout(4000)
})