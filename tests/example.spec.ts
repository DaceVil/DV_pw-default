import { test, expect, Page } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

});



test.describe('Hooks Test Suite', () => {
  let page: Page;

  // Runs before all tests
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://playwright.dev/'); // Moved here
  });

  test('Validate Locators', async () => {
    // Go to Search
    await page.locator("//nav[contains(@class, 'navbar')]//span[@class = 'DocSearch-Button-Placeholder']").click();
    // Write in Search window Locators and perform search
    await page.locator("//input[@class = 'DocSearch-Input']").fill('Locators');
    await page.getByRole('link', { name: 'Locators', exact: true }).click();
    // Expects page to have a heading with the name of Locators.
    await expect(page.getByRole('heading', { name: 'Locators', exact: true })).toBeVisible();
    // Verify header name 'Locators'
    await expect(page.getByRole('heading', { name: 'Locators', exact: true })).toHaveText('Locators');
  });
  // Runs after all tests
  test.afterAll(async () => {
    await page.close();
  });
});


