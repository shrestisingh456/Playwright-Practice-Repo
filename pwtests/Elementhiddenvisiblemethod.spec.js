
const {test,expect}=require("@playwright/test")
test("validationmethod",async({page})=>

{

    await page.goto("https://atsuat.bbsi.com/")
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.goBack() //-navigate back 
    await page.goForward() //-to move forward 
    await expect (page.getByPlaceholder("Hide/Show Example")).toBeVisible()
    await page.locator("#hide-textbox").click()
    await expect (page.getByPlaceholder("Hide/Show Example")).toBeHidden()
    await page.locator("#confirmbtn").click()
    page.on('dialog',dialog=>dialog.accept()) // it will accept the dialog popup 
    await page.locator("#mousehover").hover() // it will hover it 
   const results=page.frameLocator("#courses-iframe")
    await results.locator(" a[href*='lifetime-access']:visible").click()
    //await results.locator("a[href*='lifetime-accJune 24th - (HRIS Benefits standup call ,Sprint review / Retro) - 2hr ess']").click();
   const frames=await results.locator(" .text h2").textContent()
   console.log(frames.split("")[1])







}

)