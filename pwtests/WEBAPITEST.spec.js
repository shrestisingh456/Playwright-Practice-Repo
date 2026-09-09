//Get method

const{test,expect,request}=require('@playwright/test')

const logindata={userEmail:"shrestisingh456@gmail.com",userPassword:"Letmein1!"}
const Addtocart={_id:"6a1d617c17ee3e78baaef95f",product:{_id:"6960eae1c941646b7a8b3ed3",productName:"ADIDAS ORIGINAL",productCategory:"electronics",productSubCategory:"mobiles",productPrice:11500,productDescription:"Apple phone",productImage:"https://rahulshettyacademy.com/api/ecom/uploads/productImage_1767959265156.jpg",productRating:"0",productTotalOrders:"0",productStatus:true,productFor:"women",productAddedBy:"admin",v:0}}
const message ={message:"Product Removed from cart"}
let response
let gettoken

test.beforeAll(async()=>

{
const context= await request.newContext()
   const loginheaders= await context.post("https://rahulshettyacademy.com/api/ecom/auth/login",

{
  data:logindata

    })


expect (loginheaders.ok()).toBeTruthy()
response = await loginheaders.json()
console.log(response)
 gettoken=response.token
console.log(gettoken)

const Addcart=await context.post("https://rahulshettyacademy.com/api/ecom/user/add-to-cart",

{
data:Addtocart,
headers:{
'authorization': gettoken,
"content-type" : "application/json",
}

}
)

const cartid=await Addcart.json()
const cartresponse= cartid.message
console.log(cartresponse)


const getdetails=await context.get("https://rahulshettyacademy.com/api/ecom/product/get-product-detail/6960eae1c941646b7a8b3ed3",

  {
    headers:
    {
      'authorization': gettoken,

  }}
)
 await expect (getdetails.ok()).toBeTruthy()
const jsonreports=await getdetails.json()
console.log(jsonreports)
console.log(jsonreports.message)

const deleteorder=await context.delete("https://rahulshettyacademy.com/api/ecom/user/remove-from-cart/6a1d617c17ee3e78baaef95f/6960eae1c941646b7a8b3ed3",


  {

  headers:{
    'authorization': gettoken,


  }
  }
)


const results=await deleteorder.json()
console.log(results)
await expect(results).toEqual(message)

}

)

test ("tokenstorage",async({page})=>
{

await page.addInitScript(value=>
{

window.localStorage.setItem("token",value)

},gettoken)

await page.goto("https://rahulshettyacademy.com/client/")
await page.locator(".btn.btn-custom").nth(2).click()


})
//Delete method

// const{test,expect,request}=require('@playwright/test')

// const logindata={userEmail:"shrestisingh456@gmail.com",userPassword:"Letmein1!"}
// const Addtocart={_id:"6a1d617c17ee3e78baaef95f",product:{_id:"6960eae1c941646b7a8b3ed3",productName:"ADIDAS ORIGINAL",productCategory:"electronics",productSubCategory:"mobiles",productPrice:11500,productDescription:"Apple phone",productImage:"https://rahulshettyacademy.com/api/ecom/uploads/productImage_1767959265156.jpg",productRating:"0",productTotalOrders:"0",productStatus:true,productFor:"women",productAddedBy:"admin",v:0}}
// const message ={message:"Product Removed from cart"}
// let response
// let gettoken
// test.beforeAll(async()=>

// {
// const context= await request.newContext()
//    const loginheaders= await context.post("https://rahulshettyacademy.com/api/ecom/auth/login",

// {
//   data:logindata

//     })


// expect (loginheaders.ok()).toBeTruthy()
// response = await loginheaders.json()
// console.log(response)
//  gettoken=response.token
// console.log(gettoken)

// const Addcart=await context.post("https://rahulshettyacademy.com/api/ecom/user/add-to-cart",

// {
// data:Addtocart,
// headers:{
// 'authorization': gettoken,
// "content-type" : "application/json",
// }

// }
// )

// const cartid=await Addcart.json()
// const cartresponse= cartid.message
// console.log(cartresponse)


// const deleteorder=await context.delete("https://rahulshettyacademy.com/api/ecom/user/remove-from-cart/6a1d617c17ee3e78baaef95f/6960eae1c941646b7a8b3ed3",


//   {

//   headers:{
//     'authorization': gettoken,


//   }
//   }
// )


// const results=await deleteorder.json()
// console.log(results)
// await expect(results).toEqual(message)

// }

// )

// test ("tokenstorage",async({page})=>
// {

// await page.addInitScript(value=>
// {

// window.localStorage.setItem("token",value)

// },gettoken)

// await page.goto("https://rahulshettyacademy.com/client/")
// await page.locator(".btn.btn-custom").nth(2).click()


// }
// )


// Post Method

// const {test,expect,request}=require("@playwright/test")
//   const loginpayload={userEmail:"shrestisingh456@gmail.com",userPassword:"Letmein1!"}
//   const createoderpayload={orders:[{country:"Ecuador",productOrderedId:"6960eac0c941646b7a8b3e68"}]}
//   let result
//   let orderresults
//   test.beforeAll(async()=>
//   {

// const apirequest=await request.newContext()
// const sentrequest= await apirequest.post("https://rahulshettyacademy.com/api/ecom/auth/login",

// {
//     data:loginpayload
// })

// expect (sentrequest.ok()).toBeTruthy()

// const jsonresponse = await sentrequest.json()
//    result=  jsonresponse.token //- In jSON editor paste the response  and check three keys and extract token  
//    console.log(result)


    
//     const orders =await  apirequest.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
//         {

//             data: createoderpayload,
//             headers :{
//             'authorization' : result,
//             'content-type': 'application/json'

//               }

//      })




//      const jsonresults= await orders.json()
//      console.log(jsonresults)
//      orderresults= jsonresults.orders[0]//- In jSON editor paste the response  and check three keys and extract orders
//      console.log(orderresults)


//     })

// test("apiresponse",async({page})=>

//     {
// await page.addInitScript(value=>
// {

// window.localStorage.setItem("token",value)

// },result)

// await page.goto("https://rahulshettyacademy.com/client/")
// await page.locator("[routerlink*='myorders']").first().click()
// await page.waitForTimeout(5000)

//  const rows = page.locator("tbody tr")
//  const totalorder= await rows.count()
//  for ( let i =0;i<totalorder;i++)
//  {
//     const orders = (await rows.nth(i).locator("th").textContent()).trim();

// if (orderresults === orders) {
//     await rows.nth(i).locator("button").first().click();
//     break;
// }
//  }

//  await page.waitForTimeout(5000)

//  const check = (await page.locator(".col-text.-main").textContent()).trim();

// expect(check).toBe(orderresults);


//  })




    
 
 


    


  






  










