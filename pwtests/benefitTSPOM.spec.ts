import{test} from "@playwright/test"
import {backtoportal} from "../Utils/POMFILE_ts/backtoportal"
import { Benefitlogin } from "../Utils/POMFILE_ts/Benefitlogin"

test ("typescriptpom", async({page})=>
{
const useremail = "shresti.singh@bbsihq.com"
    const password = "Neelamdeepak@456"

    let filelogin = new Benefitlogin(page)
    await filelogin.goto()
    await filelogin.validlogin(useremail,password)
    await page.waitForLoadState("networkidle")
    await page.locator(".btn.tab-btn.tab-btn-rht").click()

    let benefitlink=new backtoportal(page)
    await benefitlink.benefitpage()

    console.log ("able to see legacy dashboard")





})

