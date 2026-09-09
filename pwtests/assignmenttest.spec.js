const{test,expect}=require("@playwright/test")
const { only } = require("node:test")
test("assignment1",async ({page})=>
{

await page.goto("https://eventhub.rahulshettyacademy.com/login")
await page.getByPlaceholder("you@email.com").fill("shrestisingh456@gmail.com")
await page.locator("#password").fill("Letmein1!")
await page.locator("[type='submit']").click()
await page.locator("#nav-events").click()
await page.getByText("Book Now").nth(0).click()
await page.getByPlaceholder("Your full name").fill("shresti")
await page.getByPlaceholder("you@email.com").fill("shrestisingh456@gmail.com")
await page.getByPlaceholder("+91 98765 43210").fill("8685704641")
await page.getByRole("button",{name :'Confirm Booking'}).click()
await page.getByRole("button" ,{name: 'View My Bookings'}).click()
await expect (page).toHaveURL("https://eventhub.rahulshettyacademy.com/bookings")
await page.getByRole("button",{name: "View Details"}).nth(0).click()
await expect (page.getByText ("Booking Information")).toBeVisible()
const bookingreference= page.locator(".font-mono.font-bold.text-indigo-600.bg-indigo-50.px-3.py-1.rounded-lg.text-sm").innerText()
const bookingtitle= page.locator(".text-2xl.font-bold.text-gray-900").innerText()


await expect(bookingreference[0]).toBe(bookingtitle[0])
await page.getByRole("button",{name:'Check eligibility for refund'}).click()
await expect (page.locator("#refund-spinner")).toBeVisible()
await expect(page.locator("#refund-spinner")).not.toBeVisible({ timeout: 6000 });
const result = await page.locator("#refund-result")
await expect(result).toBeVisible()
await expect(result).toContainText("Eligible")
await expect(result).toContainText(" Single-ticket bookings qualify for a full refund")
})

// const{test,expect}=require("@playwright/test")
// test.only("assignment1",async ({page})=>
// {
// await page.goto("https://eventhub.rahulshettyacademy.com/login")
// await page.getByPlaceholder("you@email.com").fill("shrestisingh456@gmail.com")
// await page.locator("#password").fill("Letmein1!")
// await page.locator("[type='submit']").click()

// await page.locator("#nav-events").click()
// await page.locator("#book-now-btn").nth(0).click()
// await page.locator('button:has-text("+")').click();
//   await page.locator('button:has-text("+")').click();
// await page.getByPlaceholder("Your full name").fill("shresti")
// await page.getByPlaceholder("you@email.com").fill("shrestisingh456@gmail.com")
// await page.getByPlaceholder("+91 98765 43210").fill("8685704641")
// await page.getByRole("button",{name :'Confirm Booking'}).click()
// await page.getByRole("button" ,{name: 'View My Bookings'}).click()
// await page.getByRole("button" ,{name: 'View My Bookings'}).click()
// await expect (page).toHaveURL("https://eventhub.rahulshettyacademy.com/bookings")
// await page.getByRole("button",{name: "View Details"}).nth(0).click()
// await expect (page.getByText ("Booking Information")).toBeVisible()
// const bookingreference= page.locator(".font-mono.font-bold.text-indigo-600.bg-indigo-50.px-3.py-1.rounded-lg.text-sm").innerText()
// const bookingtitle= page.locator(".text-2xl.font-bold.text-gray-900").innerText()
// await expect(bookingreference[0]).toBe(bookingtitle[0])
// await page.getByRole("button",{name:'Check eligibility for refund'}).click()
// await expect (page.locator("#refund-spinner")).toBeVisible()
// await expect(page.locator("#refund-spinner")).not.toBeVisible({ timeout: 6000 });
// const result = await page.locator("#refund-result")
// await expect(result).toBeVisible()
// await expect(result).toContainText("Not Eligible")
// await expect(result).toContainText(" Group bookings (3 tickets) are non-refundable")

// })