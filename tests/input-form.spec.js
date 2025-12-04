// tests/input-form.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Input Form Submit', () => {
  test('shows validation message when submitting empty form', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/');

    await page.getByRole('link', { name: 'Input Form Submit' }).click();

    const submitBtn = page.getByRole('button', { name: 'Submit' });
    await submitBtn.click();

    const nameInput = page.locator('input[name="name"]');
    const validationMessage = await nameInput.evaluate(
      el => el.validationMessage
    );

    await expect(validationMessage.toLowerCase()).toContain(
      'please fill out this field'
    );
  });

  test('submits form successfully with valid data', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/');

    await page.getByRole('link', { name: 'Input Form Submit' }).click();
    await expect(page).toHaveURL(/selenium-playground\/input-form-demo/);

    // Use values that match the site's validation rules
    await page.locator('input[name="name"]').fill('John Doe');
    await page.locator('#inputEmail4').fill('john@example.com');

    // Password with @ (matches examples from LT articles)
    await page.locator('input[name="password"]').fill('Password@1234');

    await page.locator('#company').fill('LambdaTest');

    // Website without protocol – just a domain
    await page.locator('#websitename').fill('example.com');

    await page.locator('select[name="country"]').selectOption({
      label: 'United States',
    });

    await page.locator('#inputCity').fill('New York');
    await page.locator('#inputAddress1').fill('123 Main St');
    await page.locator('#inputAddress2').fill('Suite 101');
    await page.locator('#inputState').fill('NY');
    await page.locator('#inputZip').fill('10001');

    await page.getByRole('button', { name: 'Submit' }).click();

    const successMsg = page.locator(
      'text=Thanks for contacting us, we will get back to you shortly.'
    );
    await expect(successMsg).toBeVisible();
  });
});
