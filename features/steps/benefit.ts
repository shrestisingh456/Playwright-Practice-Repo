
import { Given,When,Then, setDefaultTimeout } from "@cucumber/cucumber";
import { backtoportal } from "../../Utils/POMFILE_ts/backtoportal";
import { Benefitlogin } from "../../Utils/POMFILE_ts/Benefitlogin";
setDefaultTimeout( 300 *1000)


Given('I login to application with {string}  and {string}', async function (useremail, password) {
  this.filelogin = new Benefitlogin(this.page)
    await this.filelogin.goto()
    await this.filelogin.validlogin(useremail,password)
    await this.page.waitForLoadState("networkidle")
});

When('I click on back to portal', async function () {
 await this.page.locator(".btn.tab-btn.tab-btn-rht").click()

    this.benefitlink=new backtoportal(this.page)
    await this.benefitlink.benefitpage()
});

Then('it should able to navigatr successfully', function () {
  console.log ("able to see legacy dashboard")
});

