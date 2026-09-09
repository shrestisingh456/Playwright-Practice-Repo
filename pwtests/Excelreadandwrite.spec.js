
// const {test,expect}=require("@playwright/test")

// const sheet = require('exceljs')

// async function excel(updateprice, filepath, sheetname, fruitprice, updatedcolumn) {

//     const worksheet = new sheet.Workbook()
//     await worksheet.xlsx.readFile(filepath)
//     const sheettab = worksheet.getWorksheet(sheetname)
//     const written = await excelread(sheettab, updateprice)

//     const newname = sheettab.getCell(written.row, written.column + updatedcolumn.column)
//     newname.value = fruitprice
//     worksheet.xlsx.writeFile(filepath)
//     console.log("update successfully")
// }



// async function excelread(sheettab, updateprice) {
//     let written = { row: -1, column: -1 }
//     sheettab.eachRow((row, rowno) => {
//         row.eachCell((cell, columnno) => {

//             if (cell.value == updateprice) {
//                 written.row = rowno
//                 written.column = columnno
//             }
//         }
//         )
//     })
//     return written
// }

// //excel("Banana", "C:/Users/ssingh/Downloads/download.xlsx", "Sheet1", 100, { row: 0, column: 2 })

// test ("scenario1",async({page})=>
// {

// const fruit="Banana"
// const price="100"

// await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html")
// await page.locator(".button").click();
// excel("Banana", "C:/Users/ssingh/Downloads/download.xlsx", "Sheet1", 100, { row: 0, column: 2 })
// await page.locator("#fileinput").setInputFiles("C:/Users/ssingh/Downloads/download.xlsx")
//  await page.waitForTimeout(3000)
// const fruitLocator = await page.getByText(fruit)
// const output = await page.getByRole('row').filter({has:fruitLocator})
// await expect (output.locator("#cell-4-undefined")).toContainText(price)



// }
// )


const { test, expect } = require("@playwright/test")

const worksheet = require("exceljs")

async function excel(RateTIER, filepath, tabname, changedrate, updaterate) {



    const excel = new worksheet.Workbook()

    await excel.xlsx.readFile(filepath)

    const workbook = excel.getWorksheet(tabname)
    const dynamic = await refracting(workbook, RateTIER)


    const updatevalue = workbook.getCell(dynamic.row, dynamic.column + updaterate.column)
    updatevalue.value = changedrate
    await excel.xlsx.writeFile(filepath)
    console.log("updated successfully")

}

async function refracting(workbook, RateTIER) {

    let dynamic = { row: -1, column: -1 }


    workbook.eachRow((row, rowno) => {
        row.eachCell((cell, columnno) => {

            if (cell.value == RateTIER) {
                dynamic.row = rowno
                dynamic.column = columnno
            }
        }

        )


    })
    return dynamic

}


const text = "1"

test.only("scenario 1", async ({ page }) => {
    await page.goto("https://benefits-qa.bbsi.com/login")
    await page.locator("#input-vaadin-email-field-6").fill("shresti.singh@bbsihq.com")
    await page.locator("[tabindex='0']").click()
    await page.getByPlaceholder("Email, phone, or Skype").fill("shresti.singh@bbsihq.com")
    await page.locator("#idSIButton9").click()
    await page.getByPlaceholder("Password").fill("Neelamdeepak@456")
    await page.locator("[ type='submit']").click()
    await page.locator("input#KmsiCheckboxField").click()
    await expect(page.locator("input#KmsiCheckboxField")).toBeChecked()
    await page.locator("input#KmsiCheckboxField").uncheck()
    await expect(page.locator("input#KmsiCheckboxField")).not.toBeChecked() //- for uncheck checkbox assertion is not there so will use  ischecked () method and need to add tobetruthy / tobefalsy () based on ur scenarios
    await page.locator("input#idBtn_Back").click();
    await page.locator(".hamburger-menu").click()
    await page.getByText("Imports").click()
    await page.locator("[ formcontrolname='importType']").selectOption("Rate Import")
    excel("medical-sk-1", "c:/Users/ssingh/Downloads/Import Excel.xlsx", "Sheet1", "ratetiertest", { row: 0, column: 1 })
    await page.locator("[type='file']").setInputFiles("c:/Users/ssingh/Downloads/Import Excel.xlsx")
    await page.getByRole("button", { name: "Submit" }).click()
    // const result = await page.locator(".col-12.col-md-3").filter({ hasText: "Invalid Rows" })
    // const value = await result.locator("span").getByText(text).textContent()
    // console.log(value)


    const result =await page.locator(".col-12.col-md-3").filter({hasText: "Valid Rows"})

     const value =  await result.getByText(text).textContent()
     console.log(value)






})


















