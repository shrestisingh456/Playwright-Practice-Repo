
const {test} =require("@playwright/test")
test('Handling child window scenario ', async({browser})=>
    
{
const newbrowser=await browser.newContext()
const newpage= await newbrowser.newPage()
await newpage.goto("https://atsuat.bbsi.com/login")
await newpage.waitForTimeout(3000)
await newpage.locator('input#input-vaadin-email-field-6').fill("chaitanya.chintalapudi@bbsihq.com")
await newpage.waitForTimeout(3000)
await newpage.locator("[tabindex='0']").click()
await newpage.locator("#i0116").fill("chaitanya.chintalapudi@bbsihq.com")
await newpage.locator("#idSIButton9").click()
await newpage.locator("#i0118").fill("Ss831Cc#2501~")
await newpage.locator("#idSIButton9").click();
await newpage.waitForTimeout(3000)
await newpage.locator("input#idSIButton9").click()
await newpage.waitForTimeout(20000)
await newpage.locator(".avatar-bg").click()
await newpage.waitForTimeout(10000)

const [newtab]= await Promise.all([

newbrowser.waitForEvent("page"),
newpage.locator("[target='_blank']").click(),

])

})

//testff
// test('Handling child window scenario',async ({browser})=>
// {

// const newbrowser=await browser.newContext()
// const newpage= await newbrowser.newPage()
// await newpage.goto("https://atsuat.bbsi.com/login")
// await newpage.waitForLoadState("networkidle")
// await newpage.locator('input#input-vaadin-email-field-6').fill("shresti.singh@bbsihq.com")
// await newpage.waitForTimeout(3000)
// await newpage.locator("[tabindex='0']").click()
// await newpage.locator("#i0116").fill("shresti.singh@bbsihq.com")
// await newpage.locator("#idSIButton9").click()
// await newpage.locator("#i0118").fill("Neelamdeepak@456  ")
// await newpage.locator("#idSIButton9").click();
// await newpage.waitForTimeout(4000)
// await newpage.locator("input#idSIButton9").click()
// await newpage.locator(".hamburger-menu").click()
// await newpage.waitForTimeout(3000)
// await newpage.locator("[href='/applicantlist']").nth(1).click()
// await newpage.locator(".hamburger-menu").click()
// await newpage.waitForTimeout(3000)
// await newpage.locator("[data-title='Applicant Name']").click()
// await newpage.waitForTimeout(3000)


// const [childPage]= await Promise.all([ 
 
// newbrowser.waitForEvent('page'),
// newpage.locator(".btn.btn-primary").click(),
// newpage.waitForTimeout(3000)
// ])

// console.log(await childPage.locator("#downloadPrintButton").textContent())
// await childPage.waitForTimeout(3000)
// await childPage.locator("div [download='elon musk_qa enginerer']").click()

// })