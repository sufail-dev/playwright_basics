import { test, expect } from "@playwright/test";

test("Handling checkbox", async ({ page }) => {
  await page.waitForTimeout(2000);
  await page.goto("http://www.tizag.com/htmlT/htmlcheckboxes.php");
  const checkBoxes = await page.locator(
    "xpath=/html/body/table[3]/tbody/tr[1]/td[2]/table/tbody/tr/td/div[4]"
  );

  const checks = checkBoxes.locator("//*[@name='sports']");
  const count = await checks.count();

  for (let i = 0; i < count; i++) {
    checks.nth(i).click();
    await page.waitForTimeout(2000);
  }

  console.log(count);
  console.log(checkBoxes);
  console.log(checks);
});
