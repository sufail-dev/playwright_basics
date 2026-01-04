import { test, expect } from "@playwright/test";

test("Handling dropdown", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 10180 });
  await page.goto("https://www.wikipedia.org/");
  //   await page.selectOption("select", { label: "Eesti" });  -> providing label
  //await page.selectOption("select", { value: "hi" }); ------> using value
  await page.selectOption("select", { index: 6 });
  await page.waitForTimeout(2000);
  const options = await page.locator("option").all(); //locating properties
  console.log("values are " + options.length);
  for (const e of options) {
    console.log(await e.innerText());
  }
});
