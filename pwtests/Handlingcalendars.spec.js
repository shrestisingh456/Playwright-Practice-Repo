
const {test,expect}=require("@playwright/test")

test('handlingcalendar',async({browser})=>

{
const month = "1"
const date="25"
const year ="1997"
const assertion =[month,date,year]
const newbrowser = await browser.newContext()
const pages=await newbrowser.newPage()
await pages.goto("https://rahulshettyacademy.com/seleniumPractise/#/")

const [results]=await Promise.all([

    newbrowser.waitForEvent('page'),
    pages.locator(".cart-header-navlink").nth(1).click()
])

await results.locator(".react-date-picker__inputGroup").click()
await results.locator(".react-calendar__navigation__label").click()
await results.locator(".react-calendar__navigation__label__labelText.react-calendar__navigation__label__labelText--from").click()
await results.locator(".react-calendar__navigation__arrow.react-calendar__navigation__prev-button").click()
await results.locator(".react-calendar__navigation__arrow.react-calendar__navigation__prev-button").click()
await results.locator(".react-calendar__navigation__arrow.react-calendar__navigation__prev-button").click()
await results.getByText(year).click()
await results.locator(".react-calendar__tile.react-calendar__year-view__months__month").nth(Number(month)-1).click()
await results.locator("//abbr[text()='"+date+"']").click()

const inputs =  results.locator('.react-date-picker__inputGroup__input')
 
    for(let i =0; i<assertion.length;i++)
    {
        const value = await inputs.nth(i).inputValue();
        expect(value).toEqual(assertion[i]);
 
    }
})











 

test.only('Handling child window scenario',async ({browser})=>
{
const month ="5"
const date = "20"
const year ="2025"
const newbrowser=await browser.newContext()
const newpage= await newbrowser.newPage()
await newpage.goto("https://atsuat.bbsi.com/login")
await newpage.waitForLoadState("networkidle")
await newpage.locator('input#input-vaadin-email-field-6').fill("chaitanya.chintalapudi@bbsihq.com")
await newpage.waitForTimeout(3000)
await newpage.locator("[tabindex='0']").click()
await newpage.locator("#i0116").fill("chaitanya.chintalapudi@bbsihq.com")
await newpage.locator("#idSIButton9").click()
await newpage.locator("#i0118").fill("Ss831Cc#2501~")
await newpage.locator("#idSIButton9").click()
await newpage.waitForTimeout(4000)
await newpage.locator("input#idSIButton9").click()
await newpage.locator(".hamburger-menu").click()
await newpage.locator("//a [text()=' Applicant List ']").click()
await newpage.locator(".btn-link.mx-0.px-0.align-top.float-start .icon-box").click()
await newpage.getByPlaceholder("MM/DD/YYYY").nth(0).click()
await newpage.getByRole('button',{name:"2026"}).click()
await newpage.getByText(year).click()
await newpage.locator(" tr .ng-star-inserted").nth(Number(month)-1).click()
await newpage.locator("//span[text()='"+date+"']").click()
await newpage.pause()


})

