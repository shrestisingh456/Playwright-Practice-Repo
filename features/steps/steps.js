const {When,Then,Given} = require ('@cucumber/cucumber')
 const { expect } = require ('@playwright/test')
 const {chromium} = require ('playwright')

Given('login to application with {string} and {string}',{timeout : 500*1000} ,async function (username, password) {

// below code used in hooks so before each scenario hook will execute the common scenario
 //const browser =await chromium.launch(
//     {
//         headless : false
//     }
// )
// const newbrowser= await browser.newContext()
//  this.page=await newbrowser.newPage()
await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await this.page.getByPlaceholder("email@example.com").fill("shrestisingh456@gmail.com")
await this.page.getByPlaceholder("enter your passsword").fill("Letmein1!")
await this.page.getByRole("button",{name:"Login"}).click()
});

When('{string} Add to cart',{timeout : 500*1000}, async function (productName) {
 await this.page.locator(".card-body").filter({hasText:productName}).getByRole("button",{name:'Add To Cart'}).click()
await this.page.getByRole("listitem").getByRole("button",{name:'Cart'}).click()
});

Then('{string} should be display in the cart', async function (productName) {
 await expect ( this.page.getByText(productName)).toBeVisible()
});

When('I enter details and placed the order', {timeout : 1000*1000},async function () {
 await this.page.getByRole("button" ,{name:'Checkout'}).click()
await this.page.getByPlaceholder("Select Country").pressSequentially("ind")
await this.page.locator(".ta-results").filter({hasText:'India'}).click()
await this.page.locator ("[value='4542 9931 9292 2293']").fill("1234567891234567")
await this.page.locator(".input.ddl").nth(0).selectOption("02")
await this.page.locator(".input.ddl").nth(1).selectOption("16")
await this.page.locator("div .input.txt").nth(1).fill("233")
await this.page.locator(".field .input.txt").nth("2").fill("shresti singh")
const orderResponse = this.page.waitForResponse(response => response.url().includes("/order/create-order"));
await this.page.getByText("Place Order ").click();
const response = await orderResponse;
const responseBody = await response.json();
this.orderId = responseBody.orders[0];
});

Then('it should ordered successfully .', {timeout : 10*1000},async function () {

await this.page.getByRole("button", { name: "orders" }).click();
await this.page.locator("tr").filter({ hasText: this.orderId }).getByRole("button", { name: "View" }).click();
});


// // //const { Given,When,Then} = require('@cucumber/cucumber');
// // //const { expect } = require('@playwright/test');
// // //const {chromium}= require('playwright')

// Given('I logged into the application',{timeout :100*1000}, async function () {
//    const browser =await chromium.launch(
//     {
//         headless : false
//     }
//    )
//    const context=await browser.newContext()
//     this.page=await context.newPage()
// await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/")
// console.log ("application is opened")
// });

// Then('I should see {string} textbox', {timeout :300*1000}, async function (text) {
//   await expect (this.page.getByPlaceholder(text)).toBeVisible()
//   console.log("textbox is visible")
// });

// When('I click on Hide button',  {timeout :300*1000},async function () {
//  await this.page.locator("#hide-textbox").click()
//  console.log ("button is click")
// });

// Then('{string} textbox should be hidden', {timeout :300*1000}, async function (text) {
//   await expect (this.page.getByPlaceholder(text)).toBeHidden()
//   console.log("textbox is hidden")
// });


// //const { Given,When,Then} = require('@cucumber/cucumber');
// // const {expect} = require("@playwright/test")
// // const {chromium}= require('playwright')

// Given('I login to the application with {string} and {string}', {timeout : 100000},async function (username,passsword) {
// const browser=await chromium.launch(
//     {
//         headless : false
//     }
// )
// const context =await browser.newContext()
// this.page=await context.newPage()
//   await this.page.goto('https://atsuat.bbsi.com/login');
//   await this.page.getByRole('textbox', { name: 'Email Address' }).click();
//   await this.page.getByRole('textbox', { name: 'Email Address' }).fill(username);
//   await this.page.locator('vaadin-button').click();
//   await this.page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
//   await this.page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill(username);
//   await this.page.getByRole('button', { name: 'Next' }).click();
//   await this.page.getByRole('textbox', { name: 'Enter the password for' }).click();
//   await this.page.getByRole('textbox', { name: 'Enter the password for' }).press('CapsLock');
//   await this.page.getByRole('textbox', { name: 'Enter the password for' }).fill('N');
//   await this.page.getByRole('textbox', { name: 'Enter the password for' }).press('CapsLock');
//   await this.page.getByRole('textbox', { name: 'Enter the password for' }).fill(passsword);
//   await this.page.getByRole('button', { name: 'Sign in' }).click();
//   await this.page.getByRole('button', { name: 'No' }).click();
//   await this.page.waitForLoadState("networkidle")
// });

// Then('I should navigate to dashboard page with heading {string}',async function (text) {
//   await expect(this.page.getByRole('heading', { name: text })).toBeVisible();
// });

// When('I click on  {string} from the menu', {timeout : 1000},async function (heading) {
//   await this.page.locator('span').nth(1).click();
//   await this.page.getByRole('link', { name: heading }).click();
// });

// Then('I  should able to click on applicant from the list',{timeout : 30000}, async function () {
//   await this.page.getByRole('button', { name: 'Bright, Ella' }).click();
// });




