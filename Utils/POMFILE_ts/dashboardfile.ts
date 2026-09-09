import { Locator ,Page } from "@playwright/test"

 export class dashboardfile

{
  productbody:Locator;
  cart:Locator;
  submit:Locator;
  page:Page


  constructor(page:Page)
  {
   this.page=page
  this.productbody= page.locator(".card-body")
  this.cart= page.locator("[routerlink*='cart']")
  this.submit= page.locator ("[type='button']").last()

  }

  async Addtocart(productname:string)
  {
    const counts = await this.productbody.count()
    for ( let i=0;i<counts;i++)
      {
      if (await this.productbody.nth(i).locator("b").textContent()===productname)
      {
        await this.productbody.nth(i).locator("text= Add To Cart").click()
        break;
      }
    }
  }

  async gotoCart()
  {
    await this.cart.click()
  }

}

module.exports={dashboardfile}


// class dashboardfile
// {

//   constructor(page)
// {
//   this.page=page
//   this.hamburger=page.locator(".hamburger-menu")
//   this.options=page.locator(".sidemenu-wrapper a")
//   this.application=page.locator(".btn-link.text-primary.d-inline-flex.align-items-center.gap-1")
//  this.quiz =page.locator("[placeholder='Enter Text']")
// this.text=page.locator("[placeholder='Enter Text']")
//   this.quizcheckbox=page.locator("input#quizActiveCheckBox1")
//   this.uncheckbox=page.locator("input#quizActiveCheckBox1")
  
  
//   this.popup=page.locator(".btn-link.text-primary.position-relative.d-inline-flex.align-items-center.gap-1")
//   this.question1=page.locator("[maxlength='200']")
//   this.dropdown= page.locator('ng-multiselect-dropdown .dropdown-btn')
//   this.radiobutton=page.getByText("True/False", {exact: true})
  
//   this.answer=page.locator("[formcontrolname='score']")
//   this.required= page.locator("#quizReuiredCheckBox1")
//   this.correct= page.locator("[name='isCorrect']")
//   this.primary=page.locator(".btn.btn-primary.flex-grow-1.flex-sm-grow-0.flex-basis-half.flex-basis-sm-auto")
//   this.listpage=page.locator(".d-flex.justify-content-end.float-end button")
// }

//   async Applicant (question,totalmarks,paper,popupmarks)

//  {
// await this.hamburger.click()
// await this.options.nth(4).click()
// await this.page.waitForTimeout(3000)
// await this.application.click()
// await this.quiz.nth(0).fill(question)
// await this.quiz.nth(1).fill (totalmarks)
// await this.quizcheckbox.check()
// await this.uncheckbox.uncheck()
// await this.page.waitForTimeout(4000)
// await this.popup.click()
// await this.question1.fill(paper)
// await this.dropdown.click()
// await this.radiobutton.click()
// await this.answer.fill(popupmarks)
// await this.required.uncheck()
// await this.correct.nth(0).click()
// await this.primary.click()
// await this.listpage.nth(1).click()

// }
// }

// module.exports={dashboardfile}

