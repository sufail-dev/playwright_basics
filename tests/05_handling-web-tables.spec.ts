import { test, expect } from "@playwright/test";

test("Handling WebTables", async ({ page }) => {
  await page.waitForTimeout(2000);
  await page.goto("https://practice.expandtesting.com/dynamic-table");
  const rowCount = await page.locator("xpath=//tbody//tr").count();
  console.log(rowCount);
  const colCount = await page.locator("xpath=//thead//tr//th").count();
  console.log(colCount);

  const innerTextText = await page.locator("xpath=//tbody//tr").allInnerTexts();
  console.log(innerTextText);
  for (const text of innerTextText) {
    console.log(text);
  }

  console.log("-------------------------------");

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      //System.out.println(driver.findElement(By.xpath("//tbody//tr["+(i+1)+"]//td["+(j+1)+"]")).getText());

      console.log(
        await page
          .locator("xpath=//tbody//tr[" + (i + 1) + "]//td[" + (j + 1) + "]")
          .innerText()
      );
    }
  }
});
