import { test, expect } from "@playwright/test";
test("Handle Alert", async ({ page }) => {
  await page.waitForTimeout(2000);
  await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

  page.on("dialog", async (dialog) => {
    await page.waitForTimeout(3000);
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.locator("xpath=//button[text()='Log In']").click();
  await page.waitForTimeout(3000);
});
