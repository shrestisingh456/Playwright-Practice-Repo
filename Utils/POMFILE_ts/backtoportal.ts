import { Page ,Locator} from "@playwright/test"
export class backtoportal 


{
    page:Page
    benefittab:Locator
    backtoportallink:Locator

    constructor(page:Page)
  {
this.page=page
this.benefittab=page.locator(".btn.tab-btn.tab-btn-lft.tab-btn-active")
this.backtoportallink=page.locator(".mat-mdc-tooltip-trigger.masterTooltip.align-items-center.hand-cursor")
  }

  benefitpage()
{
    
    this.benefittab.click()
    this.backtoportallink.click()
}

}

module.exports={backtoportal}