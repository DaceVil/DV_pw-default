import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  console.log("test")
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

});



test('Validate Locators', async ({ page }) => {
  await page.goto('https://playwright.dev/');


  // Go to Search
  await page.getByText('Search').click();

  //Write in Search window Locators and perform search
  await page.getByPlaceholder('Search docs').fill('Locators');
  await page.waitForTimeout(1000);
  await page.keyboard.press('Enter');

  //Expects page to have a heading with the name of Locators.
  await expect(page.getByRole('heading', { name: 'Locators', exact: true })).toBeVisible();

  //Verify header name 'Locators'
  await expect(page.getByRole('heading', { name: 'Locators', exact: true })).toHaveText('Locators');

});


