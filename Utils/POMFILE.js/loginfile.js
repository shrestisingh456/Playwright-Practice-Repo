
class loginfile {

    constructor(page) {
        this.page = page
        this.email = page.locator("#userEmail")
        this.password = page.locator("#userPassword")
        this.login = page.locator("[name='login']")
    }

    async goto() {

        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    }

    async validlogin(useremail, password)

    {
        await this.email.fill(useremail)
        await this.password.fill(password)
        await this.login.click()

    }




}
module.exports = { loginfile }


//===============================================================================================

// class loginfile {
//   constructor(page) {
//     this.page = page
//     this.enterusername = page.locator('#input-vaadin-email-field-6')
//     this.usernameclick = page.locator("[tabindex='0']")
//     this.samepoup = page.locator("input#i0116")
//     this.samepopupclick = page.locator("input#idSIButton9")
//     this.enterpassword = page.locator("[type='password']")
//     this.clickonpasswordlogin = page.locator("input#idSIButton9")
//     this.checkbox = page.locator("input#KmsiCheckboxField")
//     this.uncheck = page.locator("input#KmsiCheckboxField")
//     this.save = page.locator("input#idBtn_Back")
//   }

//   async gotourl() {

//     await this.page.goto("https://atsuat.bbsi.com/login")
//     await this.page.waitForTimeout(4000)
//   }

//   async validlogin(useremail, password) {
//     await this.enterusername.fill(useremail)
//     await this.usernameclick.click()
//     await this.page.waitForTimeout(4000)

//     await this.samepoup.fill(useremail)
//     await this.samepopupclick.click()
//     await this.page.waitForTimeout(4000)

//     await this.enterpassword.fill(password)
//     await this.clickonpasswordlogin.click()
//     await this.page.waitForTimeout(3000)

//     await this.checkbox.click()
//     await this.uncheck.uncheck()
//     await this.save.click()
//     await this.page.waitForLoadState("networkidle")
//   }
// }

// module.exports = { loginfile };

