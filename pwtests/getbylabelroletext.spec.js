
// const {test ,expect}= require("@playwright/test")
// test ("getbylabelmethod",async({page})=>
// {
//   await page.goto("https://rahulshettyacademy.com/angularpractice/")
//   await page.getByLabel("Check me out if you Love IceCreams!").check()
//   await page.getByLabel("Gender").selectOption("Female")
//   await page.getByLabel("Employed").click()
//   await page.getByPlaceholder("Password").fill("Letmein1!")
//   await page.getByRole("button",{name:'Submit' }).click()
//   await page.getByText("The form has been submitted successfully").isVisible()
//   await page.getByRole("link",{name :'Shop'}).click()
//   await page.locator("app-card").filter({hasText:'Blackberry'}).getByRole("button").click()
//   await page.waitForTimeout(3000)


const {test,expect}=require("@playwright/test")
test('othermethod',async({page})=>
{

await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await page.getByPlaceholder("email@example.com").fill("shrestisingh456@gmail.com")
await page.getByPlaceholder("enter your passsword").fill("Letmein1!")
await page.getByRole("button",{name:"Login"}).click()
await page.locator(".card-body").filter({hasText:'ADIDAS ORIGINAL'}).getByRole("button",{name:'Add To Cart'}).click()
await page.getByRole("listitem").getByRole("button",{name:'Cart'}).click()
await expect ( page.getByText("ADIDAS ORIGINAL")).toBeVisible()
await page.getByRole("button" ,{name:'Checkout'}).click()
await page.getByPlaceholder("Select Country").pressSequentially("ind")
await page.locator(".ta-results").filter({hasText:'India'}).click()
await page.locator ("[value='4542 9931 9292 2293']").fill("1234567891234567")
await page.locator(".input.ddl").nth(0).selectOption("02")
await page.locator(".input.ddl").nth(1).selectOption("16")
await page.locator("div .input.txt").nth(1).fill("233")
await page.locator(".field .input.txt").nth("2").fill("shresti singh")


const orderResponse = page.waitForResponse(response => response.url().includes("/order/create-order"));
await page.getByText("Place Order ").click();
const response = await orderResponse;
const responseBody = await response.json();
const orderId = responseBody.orders[0];
console.log("New Order ID:", orderId);
await page.getByRole("button", { name: "orders" }).click();
await page.locator("tr").filter({ hasText: orderId }).getByRole("button", { name: "View" }).click();
await page.waitForTimeout(3000)


})

 