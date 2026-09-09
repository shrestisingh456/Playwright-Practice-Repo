
import{test,expect,request} from '@playwright/test'

//const {APiUtils} = require('../Utils/APiUtils');
import { APiUtils } from '../Utils/POMFILE_ts/APiUtils'

const loginPayLoad:any = {userEmail:"shrestisingh456@gmail.com",userPassword:"Letmein1!"};
const orderPayLoad = {orders:[{country:"India",productOrderedId:"6960eae1c941646b7a8b3ed3"}]};
const message ={message:"Product Removed from cart"}
let orderdeletedetails
let response:any;
let responseget

test.beforeAll( async()=>
{
   const apiContext = await request.newContext();
   const apiUtils= new APiUtils(apiContext,loginPayLoad) 
   response =await apiUtils.createOrder(orderPayLoad)
   responseget=await apiUtils.getviewdetails(response.token)
   orderdeletedetails=await apiUtils.getdeleteorder(response.token)
   expect(orderdeletedetails).toEqual(message)

   ;
});
 //create order is success
test('@API Place the order', async ({page})=>
{ 
    await page.addInitScript(value => 
        {
            window.localStorage.setItem('token',value);
        }, response.token );
``

        //window.localStorage.setItem('token','ABC123XYZ');
       // Means the user is already logged in before the page loads, so the UI doesn't need to perform the login steps.

        await page.goto("https://rahulshettyacademy.com/client");
        await page.locator("button[routerlink*='myorders']").click();
        await page.locator("tbody").waitFor();
        const rows = await page.locator("tbody tr");
        
        for(let i =0; i<await rows.count(); ++i)
            {
                const rowOrderId =await rows.nth(i).locator("th").textContent();
                if (response.orderId.includes(rowOrderId))
                    {
                        await rows.nth(i).locator("button").first().click();
                        break;
                    }
                }
                
                const orderIdDetails =await page.locator(".col-text").textContent();
                expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
            })

        

















