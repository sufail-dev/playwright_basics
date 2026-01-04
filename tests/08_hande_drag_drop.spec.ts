import { test, expect } from "@playwright/test";
test("Drag and drop", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("https://jqueryui.com/droppable/");

  await page.waitForTimeout(2000);
  const frame = page.frameLocator(".demo-frame");
  const draggable = frame.locator("#draggable");
  const droppable = frame.locator("#droppable");
  const dragBox = await draggable.boundingBox();
  const dropBox = await droppable.boundingBox();
  if (dragBox && dropBox) {
    await page.mouse.move(
      dragBox.x + dragBox.width / 2,
      dragBox.y + dragBox.height / 2
    );

    await page.mouse.down(); //press

    await page.mouse.move(
      // cursor move after pressing
      dropBox.x + dropBox.width / 2,
      dropBox.y + dropBox.height / 2
    );
    await page.mouse.up(); // release
  }
  await page.waitForTimeout(2000);
});
