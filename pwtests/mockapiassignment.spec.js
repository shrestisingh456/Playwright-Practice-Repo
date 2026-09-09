const { test, expect, request } = require("@playwright/test");

const URL = "https://eventhub.rahulshettyacademy.com"
const email = "shrestisingh456@gmail.com"
const password = "Letmein1!"



const sixthevent = {
    data: [
        { id: 1, title: 'Tech Summit 2025', category: 'Conference', eventDate: '2025-06-01T10:00:00.000Z', venue: 'HICC', city: 'Hyderabad', price: '999', totalSeats: 200, availableSeats: 150, imageUrl: null, isStatic: false },
        { id: 2, title: 'Rock Night Live', category: 'Concert', eventDate: '2025-06-05T18:00:00.000Z', venue: 'Palace Grounds', city: 'Bangalore', price: '1500', totalSeats: 500, availableSeats: 300, imageUrl: null, isStatic: false },
        { id: 3, title: 'IPL Finals', category: 'Sports', eventDate: '2025-06-10T19:30:00.000Z', venue: 'Chinnaswamy', city: 'Bangalore', price: '2000', totalSeats: 800, availableSeats: 50, imageUrl: null, isStatic: false },
        { id: 4, title: 'UX Design Workshop', category: 'Workshop', eventDate: '2025-06-15T09:00:00.000Z', venue: 'WeWork', city: 'Mumbai', price: '500', totalSeats: 50, availableSeats: 20, imageUrl: null, isStatic: false },
        { id: 5, title: 'Lollapalooza India', category: 'Festival', eventDate: '2025-06-20T12:00:00.000Z', venue: 'Mahalaxmi Racecourse', city: 'Mumbai', price: '3000', totalSeats: 5000, availableSeats: 2000, imageUrl: null, isStatic: false },
        { id: 6, title: 'AI & ML Expo', category: 'Conference', eventDate: '2025-06-25T10:00:00.000Z', venue: 'Bangalore International Exhibition Centre', city: 'Bangalore', price: '750', totalSeats: 300, availableSeats: 180, imageUrl: null, isStatic: false },
    ],
    pagination: { page: 1, totalPages: 1, total: 6, limit: 12 },
};

const fourthevent = {
    data: [
        { id: 1, title: 'Tech Summit 2025', category: 'Conference', eventDate: '2025-06-01T10:00:00.000Z', venue: 'HICC', city: 'Hyderabad', price: '999', totalSeats: 200, availableSeats: 150, imageUrl: null, isStatic: false },
        { id: 2, title: 'Rock Night Live', category: 'Concert', eventDate: '2025-06-05T18:00:00.000Z', venue: 'Palace Grounds', city: 'Bangalore', price: '1500', totalSeats: 500, availableSeats: 300, imageUrl: null, isStatic: false },
        { id: 3, title: 'IPL Finals', category: 'Sports', eventDate: '2025-06-10T19:30:00.000Z', venue: 'Chinnaswamy', city: 'Bangalore', price: '2000', totalSeats: 800, availableSeats: 50, imageUrl: null, isStatic: false },
        { id: 4, title: 'UX Design Workshop', category: 'Workshop', eventDate: '2025-06-15T09:00:00.000Z', venue: 'WeWork', city: 'Mumbai', price: '500', totalSeats: 50, availableSeats: 20, imageUrl: null, isStatic: false },
    ],
    pagination: { page: 1, totalPages: 1, total: 4, limit: 12 },
};

async function loginAndGoToEvents(page) {
    await page.goto(URL)
    await page.getByPlaceholder("you@email.com").fill(email)
    await page.getByPlaceholder("••••••").fill(password)
    await page.getByRole("button", { name: 'Sign In' }).click()
    await page.locator("#nav-events").click()


}

test("mockapis", async ({ page }) => {
    await page.route("https://api.eventhub.rahulshettyacademy.com/api/events?page=1&limit=12",
        async route => {

            const request = await page.request.fetch(route.request())
            const fakerequest = JSON.stringify(sixthevent)

            route.fulfill(
                {
                    status: 200,
                    contentType: "application/json",
                    body: fakerequest,
                }
            );
        }

    )

    await loginAndGoToEvents(page)
    //const totalcards =await page.locator("[data-testid ='event-card']").nth(0).isVisible()

    const totalcards = await page.locator("#event-card")
    await expect(totalcards.nth(0)).toBeVisible()
    await expect(totalcards).toHaveCount(6)

    const banner = await page.getByText(/sandbox holds up to/)
    console.log(banner)



    await expect(banner).toBeVisible()
    await page.waitForTimeout(6000)

    await expect(banner).toContainText("9 bookings")





}


)


test.only("2nd mock api's", async ({ page }) => {
    await page.route("https://api.eventhub.rahulshettyacademy.com/api/events?page=1&limit=12",

        async route => {

            const secondmock = await page.request.fetch(route.request())

            const fakeapis = JSON.stringify(fourthevent)

            route.fulfill(
                {
                    status: 200,
                    contentType: "application/json",
                    body: fakeapis,

                }
            )


        }
    )
    await loginAndGoToEvents(page)
    const totalcards = page.locator("#event-card")
    await expect(totalcards.nth(0)).toBeVisible()
    await page.waitForLoadState("networkidle")
    await expect(totalcards).toHaveCount(4)
    const banner = await page.getByText(/sandbox holds up to/)
    await expect(banner).not.toBeVisible()

}
)



const { test, expect, request } = require("@playwright/test");

const url = "https://eventhub.rahulshettyacademy.com"

let token


const yahoocredentialemail =

{

    email: "shrestiyahoo@yahoo.com",
    password: "Letmein1!"

}

const gmailcredentail =

{
    email: "shrestisingh456@gmail.com",
    password: "Letmein1!"

}


async function login(page, user) {

    await page.goto(url)
    await page.getByPlaceholder("you@email.com").fill(user.email)
    await page.getByPlaceholder("••••••").fill(user.password)
    await page.getByRole("button", { name: 'Sign In' }).click()
    await page.locator("#nav-events").click()

}
test("Yahoo login", async ({ page }) => {

    const context = await request.newContext()

    const call = await context.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login",
        {

            data:
            {
                email: yahoocredentialemail.email,
                password: yahoocredentialemail.password

            }

        }

    );

    await expect(call.ok()).toBeTruthy()
    const jsonresponse = await call.json()

    token = await jsonresponse.token
    console.log(token)

    const scenario = await context.get("https://api.eventhub.rahulshettyacademy.com/api/events?page=1&limit=12",

        {

            headers:
            {

                authorization: `Bearer ${token}`,

            }
        }

    )

    expect(scenario.ok()).toBeTruthy()
    const getjson = await scenario.json()

    const fetchId = getjson.data[0].id;
    const bookingsuser = { customerName: "shresti", customerEmail: yahoocredentialemail.email, customerPhone: "8686570464", quantity: 1, eventId: fetchId }


    const bookings = await context.post("https://api.eventhub.rahulshettyacademy.com/api/bookings",
        {

            headers:
            {

                authorization: `Bearer ${token}`
            },


            data: bookingsuser


        }


    )
    const bookingresults = await bookings.json()

    console.log(bookingresults)
    const bookingid = bookingresults.data.id
    console.log(bookingid)

                                                                    
    await login(page, gmailcredentail)
    await page.goto(`https://eventhub.rahulshettyacademy.com/bookings/${bookingid}`);
    await page.waitForLoadState("networkidle")
    await expect(page.getByText("Access Denied")).toBeVisible()
    await expect(page.getByText("You are not authorized to view this booking ")).toBeVisible()

    // await login(page, yahoocredentialemail)
    //  await page.goto(`https://eventhub.rahulshettyacademy.com/bookings/${bookingid}`);
    //  await page.waitForLoadState("networkidle")
    //  await expect(page.getByText("Cancel Booking")).toBeVisible()



})


