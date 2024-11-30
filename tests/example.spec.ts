import { test, expect, Page } from '@playwright/test';
import { TIMEOUT } from 'dns';

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

// login
// 3, check filter functionality
test('Test X2', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  //input[@id='user-name']
  await page.locator("//input[@id='user-name']").type('standard_user');
  //input password
  await page.locator("//input[@id='password']").type('secret_sauce');
  //press login button
  await page.locator("//input[@id='login-button']").click();
  //click on filter icon
  await page.click('.select_container');

  const filterMenu = await page.isVisible('.product_sort_container');
  expect(filterMenu).toBe(true);
  //sort by low to high
  const dropdownSelector = '.product_sort_container';  // Assuming this is the select element

  await page.waitForSelector(dropdownSelector, { state: 'visible' });
  // Choose the option by value or label (depending on what the dropdown is using)
  await page.selectOption(dropdownSelector, { value: 'lohi' }); // Use the label, value, or index

  //first item should be Sauce Labs Onesie
  const firstProduct = await page.locator('.inventory_item_name').first();

  // Get the text content of the first product
  const firstProductText = await firstProduct.textContent();

  // Compare the actual text of the first product to the expected string
  expect(firstProductText.trim()).toBe('Sauce Labs Onesie');

  await page.click('.select_container');

  const filterMenu2 = await page.isVisible('.product_sort_container');
  expect(filterMenu).toBe(true);
  //sort by low to high
  const dropdownSelector2 = '.product_sort_container';  // Assuming this is the select element

  await page.waitForSelector(dropdownSelector2, { state: 'visible' });
  // Choose the option by value or label (depending on what the dropdown is using)
  await page.selectOption(dropdownSelector, { value: 'hilo' }); // Use the label, value, or index

  //first item should be Sauce Labs Onesie
  const firstProduct2 = await page.locator('.inventory_item_name').first();

  // Get the text content of the first product
  const firstProductText2 = await firstProduct.textContent();

  // Compare the actual text of the first product to the expected string
  expect(firstProductText2.trim()).toBe('Sauce Labs Fleece Jacket');

});


test('hover over sign in', async ({ page }) => {
  await page.goto('https://danube-web.shop/');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Sign In' }).hover();
});

