import { Locator, Page } from "@playwright/test"


export class Benefitlogin {
page:Page
email:Locator
continue:Locator
signin:Locator
next:Locator
password:Locator
passwordsignin:Locator
confirm:Locator

constructor(page:Page)
    {
       this.page=page
        this.email=page.locator("#input-vaadin-email-field-6")
        this.continue=page.locator("[ tabindex='0']")
        this.signin=page.locator("#i0116")
        this.next=page.locator("[type ='submit']")
        this.password = page.locator("#i0118")
        this.passwordsignin= page.locator("#idSIButton9")
        this.confirm =page.locator("#idSIButton9")
}

async goto()
{
   await this.page.goto ("https://benefits-qa.bbsi.com/login")
}
 
async validlogin (useremail:string,password:any)
{
  await this.email.fill(useremail)
  await this.continue.click()
  await this.signin.fill(useremail)
  await this.next.click()
  await this.password.fill(password)
  await this.passwordsignin.click()
  await this.confirm.click() 

}
}
module.exports={Benefitlogin}
