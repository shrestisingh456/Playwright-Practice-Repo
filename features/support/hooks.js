const { Before, After,BeforeAll, AfterAll, Status,BeforeStep,AfterStep } = require("@cucumber/cucumber");
const { expect } = require ('@playwright/test')
const {chromium} = require ('playwright')


BeforeAll(async function () {
    browser =await chromium.launch(
        {
            headless : false
        }
    )
    context= await browser.newContext()
     page=await context.newPage()
    })

    After( async function () {


    console.log ( "execution completed")
    
        
    })

    Before( async function () {
        this.page=page

        console.log ("execution started")
       

        
    })

    BeforeStep( async function () {

        console.log ("step is executed successfully ")
        
    })

    AfterStep( async function ({result}) {

        if (result.status === Status.FAILED)
        {
            await this.page.screenshot ({path : "screeenshot1.png"})
        }
        
    })

    AfterAll( async function () {

        console.log (" All steps are exceuted successfully")
        
    })