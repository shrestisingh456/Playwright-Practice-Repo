   
   //login page 
   
   
//    const {test}=require('@playwright/test');

//    test( 'testcase 1',async ({browser})=>
//    {

//     const context =await browser.newContext();
//       const newPage =await context.newPage();
//       newPage.goto ("https://benefits-uat.bbsi.com/login")

// });

// const {login}=require('@playwright/test')
// login('loginpage',async ({browser})=>

// {
//     const newbrowser=await browser.newContext();
//     const newpage=await newbrowser.newPage();
//     await newpage.goto ("https://benefits-uat.bbsi.com/login")
// });

// const {test, expect}=require('@playwright/test');

//  test('scenario1', async ({browser})=>

//     {

// const newbrowser=await browser.newContext();
// const newpage=await newbrowser.newPage();
// await newpage.goto("https://atsuat.bbsi.com/login")
// await newpage.waitForTimeout(5000);
// console.log (await newpage.title ())

// })
// test.only('scenario2',async ({page})=>

//     {
//      await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
//      console.log(await page.title())
//      await expect(page).toHaveTitle("Let's Shop");
// })

// open a broswer and navigate to url 

// const {test,expect} =require('@playwright/test')

//  const login= test('scenario 1', async ({page})=>
//  {
   
//  await page.goto ("https://chatgpt.com/")
// console.log (await page.title() )
// await expect(page).toHaveTitle("ChatGPT")


// })

// open new browser => new page => hit url=>get the title =>confirm the title 

// const {test,expect}=require('@playwright/test')

// test('regression',async ({browser})=>
// {

//     const newbrowser= await browser.newContext()
//    const newpage= await newbrowser.newPage()
   
// } )

// test('scenario',async({page})=>
// {  
// await page.goto("https://atsuat.bbsi.com/login")
//    await page.waitForTimeout(5000)
//    console.log(await page.title())
//    await expect(page).toHaveTitle("ATS")
   
   

// })

 // finding locators of an element 


 

const {test, expect}=require('@playwright/test')
test('locators',async({browser})=>
{

const newbrowser= await browser.newContext()
const newpage=await newbrowser.newPage()
await newpage.goto("https://atsuat.bbsi.com/login")
await newpage.waitForTimeout(6000)
await console.log(await newpage.title())
await newpage.locator('#input-vaadin-email-field-6').fill("shresti.singh@bbsihq.com")
await newpage.locator("[tabindex='0']").click()
await newpage.waitForTimeout(4000)
await newpage.locator("input#i0116").fill("shresti.singh@bbsihq.co")
await newpage.waitForTimeout(3000)
await newpage.locator("#idSIButton9").click()
console.log(await newpage.locator("#usernameError").textContent()) //- if we want to extract validation msg in console  if we are giving usrname/password incorrect
await expect (newpage.locator("#usernameError")).toContainText("account") //-if we want to make sure the validation message is correct or not then will use assertion
await newpage.waitForTimeout(3000)
await newpage.locator("input#i0116").fill(" ")  // it will remove the existing values 
await newpage.locator("input#i0116").fill("shresti.singh@bbsihq.com")
await newpage.locator("input#idSIButton9").click()
await newpage.waitForTimeout(4000)
await newpage.locator("[type='password']").fill("Neelamdeepak@456")
await newpage.locator("input#idSIButton9").click();
await newpage.waitForTimeout(3000)
await newpage.locator("input#KmsiCheckboxField").click() //== checkbos
await expect (newpage.locator("input#KmsiCheckboxField")).toBeChecked() //== assertion
await newpage.locator("input#KmsiCheckboxField").uncheck() //-uncheck 
await expect (newpage.locator("input#KmsiCheckboxField")).not.toBeChecked() //- for uncheck checkbox assertion is not there so will use  ischecked () method and need to add tobetruthy / tobefalsy () based on ur scenarios
await newpage.locator("input#idBtn_Back").click();
// await newpage.waitForTimeout(15000) or below syntax 
await newpage.waitForLoadState ("networkidle")
 console.log  (await newpage.locator("div.dashboard-sm-card-text span ").nth (0).textContent())  // - it will give  text context for page index [0]
console.log  (await newpage.locator("div.dashboard-sm-card-text span ").allTextContents()) // it will give the list text content present in a page 


 
})


// if we want to extract validation msg in console  if we are giving usrname/password incorrect
//ex =
// await newpage.locator("[type='password']").fill("Neelamdeepak")
// await newpage.locator("input#idSIButton9").click();
 // console.log(newpage.locator("locator id ").textContent())


 //if we want to make sure the validation message is correct or not then will use assertion 
  //EX -
//await newpage.locator("input#i0116").fill("shresti.singh@bbsihq.co")
// await newpage.waitForTimeout(4000)
// await newpage.locator("input#idSIButton9").click()
// console.log(await newpage.locator("#usernameError").textContent()) - it will provide validation msg in comsole
// await expect(newpage.locator("#usernameError")).toContainText("accountuioo") - it will give results pass or failed 
// whether msg passed is correct or not



 // if we want ot user assertion to find the title of the page then will use {page} fixature and use 
 //below Syntax

 //test.only('scenario2',async ({page})=>

//     {
//      await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
//      console.log(await page.title())
//      await expect(page).toHaveTitle("Let's Shop");
// })

// if we want to run specfic scenarios pass then we need to declare "only" like above code 












 











 
















































