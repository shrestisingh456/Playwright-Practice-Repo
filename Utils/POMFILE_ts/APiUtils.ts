export class APiUtils 
 {
    apiContext:any;
    loginPayLoad:string
    
    constructor(apiContext:any, loginPayLoad:string) 
    {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }
 
    async getToken() 
    {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayLoad
            });

            const loginResponseJson = await loginResponse.json();
            const token = loginResponseJson.token;
            console.log(token);
            return token;
    }
 async createOrder(orderPayLoad:any) 
    {
        let response = { token:String , orderId:String};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
            {
                data: orderPayLoad,
                headers: 
                {
                    'Authorization': response.token,
                    'Content-Type': 'application/json',
                }
            });
 
        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        const orderId = orderResponseJson.orders[0];
        response.orderId = orderId;
 
        return response;
}

async getviewdetails(token:any)
{
 const getdetails=await this.apiContext.get("https://rahulshettyacademy.com/api/ecom/product/get-product-detail/6960eae1c941646b7a8b3ed3",
 
   {
     headers:
     {
       'authorization': token,
 
   }}
 )
const jsonreports=await getdetails.json()
 console.log(jsonreports)
 return(jsonreports)
 console.log(jsonreports.message)



}

async getdeleteorder(token:any)
{
    const deleteorder=await this.apiContext.delete("https://rahulshettyacademy.com/api/ecom/user/remove-from-cart/6a1d617c17ee3e78baaef95f/6960eae1c941646b7a8b3ed3",


  {

  headers:{
    'authorization': token,


  }
  }
)
const results=await deleteorder.json()
console.log(results)
return results

}
}
module.exports={APiUtils} 
 
 
 
 
 
 
 
 
 
 
 
 


































