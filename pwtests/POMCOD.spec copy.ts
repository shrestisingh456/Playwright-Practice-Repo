// const { test, expect } = require("@playwright/test")
// const { loginfile } = require("./POMFILE.js/loginfile")
// const {dashboard} =require("./POMFILE.js/dashboardfile")

// test('dynamicallyscenario', async ({ page }) => {
//     const useremail = "shrestisingh456@gmail.com"
//     const password = "Letmein1!"
//     let filelogin = new loginfile(page)
//     filelogin.goto()
//     filelogin.validlogin(useremail,password)
//     await page.waitForLoadState("networkidle")
//     const productname="iphone 13"
//     let webpage=new dashboard(page)
//     await webpage.Addtocart(productname)
//     await webpage.gotoCart()
//     await expect(page.getByText(productname)).toBeVisible();
// })

//==================================================================================================


// const { test, expect } = require('@playwright/test')
// const { loginfile } = require("../Utils/POMFILE.js/loginfile")
// const {dashboardfile}=require("../Utils/POMFILE.js/dashboardfile")
// test('locators', async ({ page }) => {
//     const useremail = "shresti.singh@bbsihq.com"
//     const password = "Neelamdeepak@456"
//     const question="Question 101"
//     const totalmarks="10"
//     const paper="question6"
//     const popupmarks="10"
//     let model = new loginfile(page)
//     let applicationmarks= new dashboardfile(page)
//     await model.gotourl()
//     await model.validlogin(useremail, password)
//     await applicationmarks.Applicant(question,totalmarks,paper,popupmarks)
    

// })


//======================================================================================================

//using data ( useremail , password , question ,total marks, paper ,popupmarks )from external json files where values were added 
//and importing the json files here and coverting them into JSON => STRING => JAVASCRIPT OBJECT 
//and declaring the values to some variable and called the variable with data 

// const { test, expect } = require('@playwright/test')
// const { loginfile } = require("../Utils/POMFILE.js/loginfile")
// const {dashboardfile}=require("../Utils/POMFILE.js/dashboardfile")
// const dataset=JSON.parse(JSON.stringify(require("../Utils/Datasetfile.json")))
// test('locators', async ({ page }) => {
    
//     let model = new loginfile(page)
//     let applicationmarks= new dashboardfile(page)
//     await model.gotourl()
//     await model.validlogin(dataset.useremail, dataset.password)
//     await applicationmarks.Applicant(dataset.question,dataset.totalmarks,dataset.paper,dataset.popupmarks)
    

// })


//===================================================================================================


/// if we want to run the same testcase with different credential 



import {test , expect} from '@playwright/test'
import{loginfile} from '../Utils/POMFILE_ts/loginfile'
import { dashboardfile } from '../Utils/POMFILE_ts/dashboardfile'
const multipleparameters=JSON.parse(JSON.stringify(require("../Utils/POMFILE.js/Datasetfile.json")))


for( let data of multipleparameters)
{
test(`dynamicallyscenario for ${data.productname}`, async ({ page }) => {
    
    let filelogin = new loginfile(page)
    await filelogin.goto()
    await filelogin.validlogin(data.useremail,data.password)
    //await page.waitForLoadState("networkidle")
    
    let webpage=new dashboardfile(page)
    await webpage.Addtocart(data.productname)
    await webpage.gotoCart()
    //await expect(page.getByText(data.productname)).toBeVisible();
})
}

