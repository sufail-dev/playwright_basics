import { test, expect } from "@playwright/test";
test("handle sliders", async ({ page }) => {
  await page.goto("https://jqueryui.com/slider/");
  const frame = await page.frameLocator("//*[@id='content']/iframe");
  const slider = await page.locator("//*[@id='slider']");
  const boundingBox = await slider.boundingBox();
  if (boundingBox) {
    const startX = boundingBox.x + boundingBox.width / 2;
    const startY = boundingBox.y + boundingBox.height / 2;
    await page.mouse.move(startX, startY);
    await page.mouse.down();
    await page.mouse.move(startX + 400, startY);
    await page.mouse.up();
  }
});
