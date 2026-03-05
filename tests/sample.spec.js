const{test,expect}=require('@playwright/test')

test("my first test", async function({page}){
    expect(12).toBe(12)
})

test("my second test", async function({page}){
    expect(100).toBe(100)
})

test.skip("my third test", async function({page}){
    expect(120).toBe(120)
})

test("my fourth test", async function({page}){
    expect("Rajan Ojha").toContain("Rajan")
    expect(true).toBeTruthy()
})

test("my fifth test", async function({page}){
    expect(false).toBeFalsy()
})

test("my Sixth test", async function({page}){
    expect("Rajan Ojha" .includes("Rajan")).toBeTruthy()
})