// const {Given,When,Then, setDefaultTimeout} = require("@cucumber/cucumber")
// const {benefit}= require("../../Utils/POMFILE.js/benefit")
// const {plantype}=require("../../Utils/POMFILE.js/plantype")
// const {Retirementclass}=require("../../Utils/POMFILE.js/Retirementclass")

    
// const { expect} = require("@playwright/test")
// //const {chromium} = require('playwright')

// setDefaultTimeout( 400 *1000)

// Given('I login to application  {string}',async function (url) {
//   // const browser =  await chromium.launch(
//   //   {
//   //       headless : false
//   //   }
//   // )
//   //   this.page=await browser.newPage()
//     this.application= new benefit(this.page)
//     await this.application.goto(url)
    
// });

// When('I login as a {string} and {string}', async function (username, password) {
//   await this.application.validlogin(username,password)
// });

// Then('I should be able to login successfully',  async function () {
//   await this.page.waitForLoadState("networkidle")
// });

// Then('I should  also see {string} header .',async function (Retirement) {
//   await this.page.locator(".btn.tab-btn.tab-btn-lft").click()
//  await expect(this.page.getByRole("button",{ name : Retirement}).nth(0)).toBeVisible()
//  await this.page.locator(".btn.tab-btn.tab-btn-lft").click()
 
 
// });
// When('I click on {string}' ,async function (hamburger) {
   
//   await this.page.locator(".btn.tab-btn.tab-btn-rht.tab-btn-active").click()
//   await this.page.locator(".hamburger-menu").click()
// });



// Then('I should see {string}', async function (RetirementPlanTypes) {
//   await this.page.getByText(RetirementPlanTypes, { exact: true }).click() 
// });

// When('I add {string} successfully', async function (string) {
//    this.retirementplan=new plantype(this.page)

// await this.retirementplan.retirementplanstype()
// });

// Then('I should see snackbar message', async function () {
//   await expect(this.page.locator(".snackbar-message")).toHaveText("Plan name added successfully")
// });


// When('I click  on {string} from the menu', async function (string) {
//   await this.page.locator(".mat-mdc-tooltip-trigger.masterTooltip.align-items-center").nth(0).click()
// });

// When('I Add {string}', async function (string) {
//  this.Retirementpage = new Retirementclass (this.page)
// await this.Retirementpage.addretiremtclass()

// });

// Then('I should be able to add {string} successfully .', function (string) {
//   console.log ("able to add successfully ")
// });

