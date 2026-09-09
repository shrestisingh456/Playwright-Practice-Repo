
const { test ,expect} = require ("@playwright/test")
const {benefit}= require("../Utils/POMFILE.js/benefit")
const {plantype}=require("../Utils/POMFILE.js/plantype")
const {Retirementclass}=require("../Utils/POMFILE.js/Retirementclass")

test ("loginapplication",async ({page})=>
{

    const username="shresti.singh@bbsihq.com"
    const password ="Neelamdeepak@456"

let application = new benefit(page)
await application.goto()
await application.validlogin(username,password)
await page.waitForLoadState("networkidle")

await expect(page.locator(".btn.tab-btn.tab-btn-rht")).toBeVisible()
await page.locator(".btn.tab-btn.tab-btn-lft").click()
await page.locator(".btn.tab-btn.tab-btn-rht.tab-btn-active").click()

await page.locator(".hamburger-menu").click()
await page.getByText("Retirement Plan Types", { exact: true }).click()

let retirementplan=new plantype(page)

await retirementplan.retirementplanstype()

await expect(page.locator(".snackbar-message")).toHaveText("Plan name added successfully");
page.locator(".mat-mdc-tooltip-trigger.masterTooltip.align-items-center").nth(0)

let Retirementpage = new Retirementclass (page)
await Retirementpage.addretiremtclass()

console.log ("able to add successfully ")





})