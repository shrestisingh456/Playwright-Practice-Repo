//Request intercept /mock


const { test, expect, request } = require('@playwright/test');
const { APiUtils } = require('../Utils/APiUtils');
const loginPayLoad = { userEmail: "shrestisingh456@gmail.com", userPassword: "Letmein1!" };
const orderPayLoad = { orders: [{ country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3" }] };
const message = { message: "Product Removed from cart" }
const dupe = { data: [], message: "No Orders" }
let response;


test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new APiUtils(apiContext, loginPayLoad)
    response = await apiUtils.createOrder(orderPayLoad)

        ;
});




test('@API Place the order', async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);
    ``

    await page.goto("https://rahulshettyacademy.com/client");


    page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6a1d617c17ee3e78baaef95f",

        async route => {

            const results = await page.request.fetch(route.request())
            let body = JSON.stringify(dupe)

            route.fulfill(
                {
                    results,
                    body,

                }
            )
        }
    )
    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6a1d617c17ee3e78baaef95f")
    console.log(await page.locator(".mt-4.ng-star-inserted").textContent())
})

// Response intercept /mock


const {test,expect,request}=require("@playwright/test")

test("mockapi2",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await page.getByPlaceholder("email@example.com").fill("shrestisingh456@gmail.com")
await page.getByPlaceholder("enter your passsword").fill("Letmein1!")
await page.getByRole("button",{name:"Login"}).click()
await page.getByRole("button",{name : 'orders'}).click()

page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    route=>route.continue({url:"https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=9a9090515685b9949b49eb9e55"})
)
await page.getByRole("button",{name :'View'}).nth(0).click()

await page.getByText("You are not authorize to view")

}   


)


//route.abort () - it will abort the network before reach to the browser  ,it will see how the application perform with  failed request coorectly 


const {test,expect,request}=require("@playwright/test")

test("mockapi2",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await page.getByPlaceholder("email@example.com").fill("shrestisingh456@gmail.com")
await page.getByPlaceholder("enter your passsword").fill("Letmein1!")
await page.getByRole("button",{name:"Login"}).click()
await page.route("**/**.{jpg,jpeg}",route=>route.abort())
await page.route("**/api/ecom/order/get-orders-for-customer/**",route=>route.abort())
await page.getByRole("button",{name : 'orders'}).click()
await page.pause()

}   


)
