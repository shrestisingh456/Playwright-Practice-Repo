const { utimesSync } = require("node:fs")

class plantype
{
    constructor(page)
    {
        this.page=page
        
       
        this.addplan=page.getByText("Add Plan Name")
        this.option=page.locator("[ formcontrolname ='planTypeId']")
        this.planname=page.getByPlaceholder("Enter Text")
        this.save=page.locator(".btn.btn-primary")
     }

    async retirementplanstype()
    {
        
    const planName = `Retirement Plan ${Date.now()}`;
        await this.addplan.click()
        await this.option.selectOption(" Retirement ")
        await this.planname.fill(planName)
        await this.save.click()
    }
}

module.exports={plantype}

