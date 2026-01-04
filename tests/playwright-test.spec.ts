import { test, expect } from "@playwright/test";
test("First playwright test", async ({ page }) => {
  await page.goto("http://way2automation.com/");
  const title = await page.title();
  expect(title).toContain("Way2");
  await page.goto("http://gmail.com");
  await page.waitForTimeout(2000);
  await page.goBack();
  await page.waitForTimeout(2000);
  await page.goForward();
  await page.waitForTimeout(2000);
  console.log(title);
});

test("Finding elements", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("https://www.facebook.com/login/");
  await page;
  // .getByLabel("Email address or phone number") by using label
  // .fill("sufail.@gmail.com");
  await page.waitForTimeout(2000);
  await page.locator("button").filter({ hasText: "Log in" }).click();
  await page.waitForTimeout(2000);

  const errorMessage = await page.locator(
    "//*[text()='Find your account and log in.']"
  ).innerText;
  console.log(errorMessage);
  // expect(errorMessage).toContain("Find your account and log in.");
});
