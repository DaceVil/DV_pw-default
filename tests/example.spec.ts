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

  // await page.waitForTimeout(1000);
  await page.click('.select_container');

  const filterMenu2 = await page.isVisible('.product_sort_container');
  expect(filterMenu).toBe(true);
  //sort by hogh to low
  const dropdownSelector2 = '.product_sort_container';  // Assuming this is the select element

  await page.waitForSelector(dropdownSelector2, { state: 'visible' });
  // Choose the option by value or label (depending on what the dropdown is using)
  await page.selectOption(dropdownSelector2, { value: 'hilo' }); // Use the label, value, or index

  //first item should be Sauce Labs Fleece Jacket
  const firstProduct2 = await page.locator('.inventory_item_name').first();

  // Get the text content of the first product
  const firstProductText2 = await firstProduct.textContent();

  // Compare the actual text of the first product to the expected string
  expect(firstProductText2.trim()).toBe('Sauce Labs Fleece Jacket');
  // await page.waitForTimeout(1000);
  //sort by A to Z
  const dropdownSelector3 = '.product_sort_container';  // Assuming this is the select element

  await page.waitForSelector(dropdownSelector3, { state: 'visible' });
  // Choose the option by value or label (depending on what the dropdown is using)
  await page.selectOption(dropdownSelector3, { value: 'az' }); // Use the label, value, or index

  //first item should be Sauce Labs Backpack
  const firstProduct3 = await page.locator('.inventory_item_name').first();

  // Get the text content of the first product
  const firstProductText3 = await firstProduct.textContent();

  // Compare the actual text of the first product to the expected string
  expect(firstProductText3.trim()).toBe('Sauce Labs Backpack');
  // await page.waitForTimeout(1000);
  //sort by Z to A
  const dropdownSelector4 = '.product_sort_container';  // Assuming this is the select element

  await page.waitForSelector(dropdownSelector4, { state: 'visible' });
  // Choose the option by value or label (depending on what the dropdown is using)
  await page.selectOption(dropdownSelector4, { value: 'za' }); // Use the label, value, or index

  //first item should be Sauce Labs Backpack
  const firstProduct4 = await page.locator('.inventory_item_name').first();

  // Get the text content of the first product
  const firstProductText4 = await firstProduct.textContent();

  // Compare the actual text of the first product to the expected string
  expect(firstProductText4.trim()).toBe('Test.allTheThings() T-Shirt (Red)');
  // await page.waitForTimeout(1000);

});


test('Test X3 add to chart and go to checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  //input[@id='user-name']
  await page.locator("//input[@id='user-name']").type('standard_user');
  //input password
  await page.locator("//input[@id='password']").type('secret_sauce');
  //press login button
  await page.locator("//input[@id='login-button']").click();
  //find item Sauce Labs Bike Light add to chart and go to checkout
  //const productLocator = page.locator('.inventory_item_name').first();
  // Click on the first product

  await page.locator('text=Sauce Labs Bike Light').click();

  // Wait for the price element to be visible
  await page.waitForSelector('.inventory_item_price', { state: 'visible' });

  // // Get the price of the product
  // const itemPrice = await page.locator('.inventory_item_price').textContent();
  // expect(itemPrice.trim()).toBe('9.99');  // Check if the price is correct
  // //click on filter icon
  // await page.click('.select_container');

  // const filterMenu = await page.isVisible('.product_sort_container');
  // expect(filterMenu).toBe(true);
  // //sort by low to high
  // const dropdownSelector = '.product_sort_container';  // Assuming this is the select element

  // await page.waitForSelector(dropdownSelector, { state: 'visible' });
  // // Choose the option by value or label (depending on what the dropdown is using)
  // await page.selectOption(dropdownSelector, { value: 'lohi' }); // Use the label, value, or index

  // //first item should be Sauce Labs Onesie
  // const firstProduct = await page.locator('.inventory_item_name').first();

  // // Get the text content of the first product
  // const firstProductText = await firstProduct.textContent();

  // // Compare the actual text of the first product to the expected string
  // expect(firstProductText.trim()).toBe('Sauce Labs Onesie');


});

test('hover over sign in', async ({ page }) => {
  await page.goto('https://danube-web.shop/');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Sign In' }).hover();
});

