class Retirementclass
{
    constructor(page)
    {
        this.page=page
        
        this.add=page.getByText("Add Retirement Class").nth(0)
        this.company=page.locator (".dropdown-btn")
        this.rc=page.getByPlaceholder("Enter Text")
        this.calendar=page.locator(".mdc-icon-button.mat-mdc-icon-button.mat-mdc-button-base.mat-unthemed").nth(0)
        this.forward = page.locator("//button[@aria-label='Next month']//*[name()='svg']")
        this.center=page.locator(".mdc-button__label").nth(0)
        this.year=page.locator(".mat-calendar-body-cell-content.mat-focus-indicator").nth(11)
        this.years=page.locator(".mat-calendar-body-cell-content.mat-focus-indicator").nth(0)
        this.date=page.locator(".mat-calendar-body-cell-content.mat-focus-indicator").nth(4) //- jan 5 2027
        this.save =page.locator(".btn.btn-primary")
    }
    async addretiremtclass()
    
    {
         const companyname= `Retirement ${(Date.now())}`

      await this.add.click()
      await this.company.click()
      await this.page.getByText("ABOVE THE REST PAINTING INC (123456)").click()
      await this.rc.fill(companyname)
      await this.calendar.click()
      await this.forward.click()
      await this.center.click()
      await this.year.click()
      await this.years.click()
      await this.date.click()
      await this.save.click()
    } 
}

module.exports={Retirementclass}