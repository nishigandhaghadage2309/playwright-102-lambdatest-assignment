// tests/simple-form.spec.js
const { test, expect } = require('@playwright/test');

test('Simple Form Demo - message appears correctly', async ({ page }) => {
  const message = process.env.CUSTOM_MESSAGE || 'Welcome to LambdaTest';

  // Go directly to Selenium Playground home
  await page.goto('https://www.lambdatest.com/selenium-playground/');

  // Open "Simple Form Demo"
  await page.getByRole('link', { name: 'Simple Form Demo' }).click();

  // Verify URL
  await expect(page).toHaveURL(/selenium-playground\/simple-form-demo/);

  // Enter message
  await page.locator('//input[@placeholder="Please enter your Message"]').fill(message);

  // Click button
  await page.getByRole('button', { name: 'Get Checked Value' }).click();

  // Validate output (allowing for spaces/extra text)
  const output = page.locator('#message');
  await expect(output).toContainText(message);
});
