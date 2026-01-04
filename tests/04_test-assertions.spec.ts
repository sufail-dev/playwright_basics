import { test, expect } from "@playwright/test";

test("Handling checkbox", async ({ page }) => {
  await page.waitForTimeout(2000);
  await page.goto("http://www.tizag.com/htmlT/htmlcheckboxes.php");
  await expect(page).toHaveURL("http://www.tizag.com/htmlT/htmlcheckboxes.php");
  await expect(page).not.toHaveURL("http:hhdhd");
  console.log("no errors");
  await page.waitForTimeout(2000);
  await expect(page).toHaveTitle("HTML Tutorial - Checkboxes");
  const link = await page.locator(
    "xpath=//*[@class='menu']//a[text()='PHP Tutorial']"
  );
  await expect(link).toHaveText("PHP Tutorial");
  console.log("closed");
});
