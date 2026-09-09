const {test,expect,request}=require("@playwright/test")

let webcontext

test.beforeAll(async({browser})=>
{
     
   const newbrowser = await browser.newContext()
   const page = await newbrowser.newPage()
   await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator("#userEmail").fill("shrestisingh456@gmail.com")
    await page.locator("#userPassword").fill("Letmein1!")
    await page.locator("[name='login']").click()
    await page.waitForURL("**rahulshettyacademy.com**")
    await page.locator(".btn.btn-custom").nth(1).click()
    await  newbrowser.storageState({path :'storage.json'})
    webcontext =await browser.newContext({storageState : "storage.json"})

}
)

test('scenario2',async ()=>

    {
     const page =await webcontext.newPage()

     await page.goto("https://rahulshettyacademy.com/client/")

await page.locator(".card-body").filter({hasText:'ADIDAS ORIGINAL'}).getByRole("button",{name:'Add To Cart'}).click()
await page.getByRole("listitem").getByRole("button",{name:'Cart'}).click()
await expect ( page.getByText("ADIDAS ORIGINAL")).toBeVisible()
await page.getByRole("button" ,{name:'Checkout'}).click()
await page.getByPlaceholder("Select Country").pressSequentially("ind")
await page.locator(".ta-results").filter({hasText:'India'}).click()
await page.locator ("[value='4542 9931 9292 2293']").fill("1234567891234567")
await page.locator(".input.ddl").nth(0).selectOption("02")
await page.locator(".input.ddl").nth(1).selectOption("16")
await page.locator("div .input.txt").nth(1).fill("233")
await page.locator(".field .input.txt").nth("2").fill("shresti singh")
await page.getByText("Place Order ").click()
await page.waitForLoadState("networkidle")
await page.getByRole("button",{name : 'orders'}).click()
await page.locator("tr").filter({hasText :'6a2a69dd17ee3e78bad13345'}).getByRole("button",{name:'View'}).click()
await page.waitForTimeout(3000)

})

 
//  const { test, expect, request } = require('@playwright/test')
// let webcontext

// test.beforeAll(async ({ browser }) => {

//     const context = await browser.newContext()
//     const page = await context.newPage()
//     await page.goto("https://atsuat.bbsi.com/login")
//     await page.waitForTimeout(6000)
//     await page.locator('#input-vaadin-email-field-6').fill("chaitanya.chintalapudi@bbsihq.com")
//     await page.locator("[tabindex='0']").click()
//     await page.waitForTimeout(4000)
//     await page.locator("input#i0116").fill("chaitanya.chintalapudi@bbsihq.com")
//     await page.waitForTimeout(3000)
//     await page.locator("#idSIButton9").click()
//     await page.waitForTimeout(4000)
//     await page.locator("[type='password']").fill("Ss831Cc#2501~")
//     await page.locator("input#idSIButton9").click();
//     await page.waitForTimeout(3000)
//     await page.locator("input#KmsiCheckboxField").click()
//     await expect(page.locator("input#KmsiCheckboxField")).toBeChecked()
//     await page.locator("input#KmsiCheckboxField").uncheck()
//     await expect(page.locator("input#KmsiCheckboxField")).not.toBeChecked()
//     await page.locator("input#idSIButton9").click()
//     await page.waitForURL("**atsuat.bbsi.com/**")
//    await page.locator(".hamburger-menu").click()

//     await context.storageState({ path: "ats.json" });
//     webcontext = await browser.newContext({ storageState: "ats.json" });
// })


// test('locators', async () => {
    
//     const page = await webcontext.newPage()
//     await page.goto("https://atsuat.bbsi.com/login")
   
//     await page.locator(".hamburger-menu").click()
//     await page.locator("//a [text()=' Applicant List ']").click()
//     await page.locator(".btn-link.mx-0.px-0.align-top.float-start .icon-box").click()
//     const year = "2025";
//     const month = "7";
//     const date = "22";
//     await page.getByPlaceholder("MM/DD/YYYY").nth(0).click()
//     await page.getByRole('button', { name: "2026" }).click()
//     await page.getByText(year).click()
//     await page.locator(" tr .ng-star-inserted").nth(Number(month) - 1).click()
//     await page.locator("//span[text()='" + date + "']").click()

// })
