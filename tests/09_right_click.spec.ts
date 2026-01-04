import { test, expect } from "@playwright/test";
test("Right click", async ({ page }) => {
  await page.waitForTimeout(2000);
  //https://deluxe-menu.com/popup-mode-sample.html
  await page.goto("https://deluxe-menu.com/popup-mode-sample.html");
  await page
    .locator("xpath=//p[@align='center']//br//following-sibling::img")
    .click({ button: "right" });
  await page.waitForTimeout(2000);
});
