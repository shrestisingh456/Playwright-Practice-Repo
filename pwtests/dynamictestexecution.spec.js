// const {test}=require('@playwright/test')
// test('locators',async({browser})=>
// {

// const newbrowser= await browser.newContext()
// const newpage=await newbrowser.newPage()
// await newpage.goto("https://rahulshettyacademy.com/client/#/auth/login")
// await newpage.locator("#userEmail").fill("shrestisingh456@gmail.com")
// await newpage.locator("#userPassword").fill("Letmein1!")
// await newpage.locator ("#login").click()
// // await newpage.waitForTimeout(5000)
// //or 
// await newpage.waitForLoadState ("networkidle")
// console.log ( await newpage.locator(".card-body b").nth(2).textContent())  // - it will give  text context for 2nd product 
// console.log ( await newpage.locator(".card-body b").allTextContents())  // it will give the list text content present in a page 

// await newpage.locator("")
// })


//Imp *****// Dynamically find the product to buy from the list of product 
// login to site 
// select one item 
// add to cart and do checkout process 
// print the orderid 
//checked the printed orderid in the oder page and searched for the orderid and click on view
//check the selected ordered is displaying correctly or not 


// const {test, expect}=require("@playwright/test")

// test('dynamicallyscenario',async ({browser})=>

// {   const newbrowser = await browser.newContext()
//     const newpage= await newbrowser.newPage()

    
//     await newpage.goto("https://rahulshettyacademy.com/client/#/auth/login")
//     const productdetails= newpage.locator(".card-body")
//     const productname="iphone 13 pro"
//     await newpage.locator("#userEmail").fill("shrestisingh456@gmail.com")
//     await newpage.locator("#userPassword").fill("Letmein1!")
//     await newpage.locator("[name='login']").click()
//     await newpage.waitForLoadState("networkidle")
//     const counts = await productdetails.count()
//     for ( let i=0;i<counts;i++)
//     {
//       if (await productdetails.nth(i).locator("b").textContent()===productname)
//       {
//         await productdetails.nth(i).locator("text= Add To Cart").click()
//         break;
//       }
//     }
  

//     await newpage.locator("[routerlink*='cart']").click()

//      await expect(newpage.locator("h3:has-text('iphone 13 pro')")).toBeVisible();
      

//     await newpage.locator ("[type='button']").last().click()

//     await newpage.locator("[placeholder='Select Country']").pressSequentially("ind")
//     await newpage.waitForTimeout (5000)
//    const dropdown=await newpage.locator (".ta-results")
//     const totalcount=await newpage.locator(".ta-item").count()
//     for (let i=0; i<totalcount;i++)
//     {
//       const result=await dropdown.locator(".ta-item").nth(i).textContent()
//       if(result==" India")
//       {
//         await dropdown.locator(".ta-item").nth(i).click()
//         break;
//       }
//     }

//     // const [newtab]= await Promise.all ([

//     //     newbrowser.waitForEvent("page"),
//     //     newpage.locator(".blinkingText").click()


//     // ])
//     // await newtab.waitForTimeout(5000)
//     // console.log(await newtab.locator(".text-base").nth(1).textContent())

//     await  expect (newpage.locator(".user__name [type='text']").first()).toHaveText("shrestisingh456@gmail.com")

// await newpage.locator ("[value='4542 9931 9292 2293']").fill("1234567891234567")
// await newpage.locator(".input.ddl").nth(0).selectOption("02")
// await newpage.locator(".input.ddl").nth(1).selectOption("16")
// await newpage.locator("div .input.txt").nth(1).fill("233")
// await newpage.locator(".field .input.txt").nth("2").fill("shresti singh")
// await newpage.locator(".btnn.action__submit.ng-star-inserted").click()
// await expect(newpage.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
// const neworders=await newpage.locator(".em-spacer-1 .ng-star-inserted").textContent()
// console.log(neworders)


// await expect(newpage.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
// await newpage.locator("[routerlink*='myorders']").first().click()

// await newpage.waitForTimeout(5000)

//  const rows = newpage.locator("tbody tr")
//  const totalorder= await rows.count()
//  for ( let i =0;i<totalorder;i++)
//  {
//     const orders=await rows.nth(i).locator("th").textContent()
//     if(neworders.includes(orders))
//     {
//         await rows.nth(i).locator("button").first().click()
//         break;
//     }
//  }

//  await newpage.waitForTimeout(5000)

//  const check=await newpage.locator(".col-text.-main").textContent()
// expect(neworders.includes(check)).toBeTruthy()



// }



// )





// //=====================================================================

// // test.only("ATSscenario",async({browser})=>

// // {
// // const newbrowser=await browser.newContext()
// // const newpage= await newbrowser.newPage()
// // await newpage.goto("https://atsuat.bbsi.com/login")
// // await newpage.waitForTimeout(3000)
// // await newpage.locator('input#input-vaadin-email-field-6').fill("shresti.singh@bbsihq.com")
// // await newpage.waitForTimeout(3000)
// // await newpage.locator("[tabindex='0']").click()
// // await newpage.locator("#i0116").fill("shresti.singh@bbsihq.com")
// // await newpage.locator("#idSIButton9").click()
// // await newpage.locator("#i0118").fill("Neelamdeepak@456  ")
// // await newpage.locator("#idSIButton9").click();
// // await newpage.waitForTimeout(3000)
// // await newpage.locator("input#idSIButton9").click()
// // await newpage.waitForLoadState("networkidle")
// // const jobs= newpage.locator(".card.dashboard-sm-card")
// // const total= await jobs.count()

// // for ( let i=0;i<total;i++)
// // {
// //   const appliedjob =await jobs.nth(i).locator(".dashboard-sm-card-text").textContent()
// //   if(appliedjob==="Applied")
// //   {
// //     await jobs.nth(i).locator("a").click()
// //     break;
// //   }
// // }

// // }




// // )




// test("ATSscenario",async({browser})=>

// {
// const newbrowser=await browser.newContext()
// const newpage= await newbrowser.newPage()
// await newpage.goto("https://atsuat.bbsi.com/login")
// await newpage.waitForTimeout(3000)
// await newpage.locator('input#input-vaadin-email-field-6').fill("shresti.singh@bbsihq.com")
// await newpage.waitForTimeout(3000)
// await newpage.locator("[tabindex='0']").click()
// await newpage.locator("#i0116").fill("shresti.singh@bbsihq.com")
// await newpage.locator("#idSIButton9").click()
// await newpage.locator("#i0118").fill("Neelamdeepak@456  ")
// await newpage.locator("#idSIButton9").click();
// await newpage.waitForTimeout(3000)
// await newpage.locator("input#idSIButton9").click()
// await newpage.waitForLoadState("networkidle")
// await newpage.locator(".card.dashboard-sm-card").filter({hasText:"Applied"}).locator("a").click()
// })
//==========================================================================================================










