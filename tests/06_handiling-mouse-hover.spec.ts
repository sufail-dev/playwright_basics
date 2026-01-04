import { test, expect } from "@playwright/test";

test("Handling checkbox", async ({ page }) => {
  await page.waitForTimeout(3000);
  await page.goto("https://www.way2automation.com/");
  await page.locator("xpath=//*[@id='menu-item-27580']").hover();
  await page.waitForTimeout(3000);
  await page
    .locator("xpath=//*[@id='menu-item-27580']//span[text()='Selenium']")
    .hover();
  await page
    .locator(
      "xpath=//*[@id='menu-item-27580']//li[@id='menu-item-27583']//span[text()='Selenium with Java']"
    )
    .click();

  const text = await expect(
    page.locator("xpath=//*[text()='Selenium Training Online']")
  ).toBeVisible();
});
