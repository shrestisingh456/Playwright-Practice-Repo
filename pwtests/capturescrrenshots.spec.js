


const {test,expect}=require("@playwright/test")
test('othermethod',async({page})=>
{

await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await page.getByPlaceholder("email@example.com").fill("shrestisingh456@gmail.com")
await page.getByPlaceholder("enter your passsword").fill("Letmein1!")
await page.getByRole("button",{name:"Login"}).click()
await page.locator(".card-body").filter({hasText:'ADIDAS ORIGINAL'}).getByRole("button",{name:'Add To Cart'}).click()
await page.getByRole("listitem").getByRole("button",{name:'Cart'}).click()
await page.getByRole("listitem").getByRole("button",{name:'Cart'}).screenshot({path :"elementscreenshot.png"})
// it will take screenshots of particular element i.e  cart button 


await expect ( page.getByText("ADIDAS ORIGINAL")).toBeVisible()
 //await page.screenshot({path :'fullpage.screenshots.png'}) - /// it will take full page screenshots.

  expect ( await page.screenshot({path :'visualpage.screenshots.png'})).toMatchSnapshot("landingpage.png")
 // it will match the screenshot with landingpage.png  if landingpage.png is not exist in first run it will fail and create  landingpage.png
 //in second run it will compare and give the results .

await page.getByRole("button" ,{name:'Checkout'}).click()


})