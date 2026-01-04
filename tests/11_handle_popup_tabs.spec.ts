import { test, expect } from "@playwright/test";
test("Handle Tabs", async ({ page }) => {
  await page.waitForTimeout(2000);
  await page.goto(
    "https://www.way2automation.com/way2auto_jquery/automation-practice-site.html"
  );

  const [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("xpath=//figure//img[@alt='frames-and-windows']").click(),
  ]);
  await newPage.waitForLoadState();
  const frame = await newPage.frames()[1];
  const [secondPage] = await Promise.all([
    newPage.waitForEvent("popup"),
    frame.locator("xpath=//a[text()='New Browser Tab']").click(),
  ]);
  await secondPage.waitForLoadState();

  console.log(await secondPage.title());

  await secondPage.close();
  await newPage.close();
  //await page.frameLocator(".demo-frame");
  //await frame.locator("xpath=//a[text()='New Browser Tab']").click();
});
