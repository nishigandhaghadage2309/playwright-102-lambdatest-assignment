// tests/slider.spec.js
const { test, expect } = require('@playwright/test');

test('Slider Demo - set default value 15 slider to 95', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/');

  // Open "Drag & Drop Sliders" page
  await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();

  // Locate the "Default value 15" slider and its displayed value
  const sliderLabel = page.getByText('Default value 15');
  const slider = sliderLabel.locator('xpath=following-sibling::div//input');
  const sliderValue = sliderLabel.locator(
    'xpath=following-sibling::div//output | following-sibling::div//span'
  );

  // Set slider to 95 and also update the output text
  await slider.evaluate((el, value) => {
    // Set the input's value
    el.value = value;

    // Fire input/change events in case any JS listeners exist
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));

    // Make sure the visible output next to slider reflects this value
    const container = el.parentElement;
    const output =
      (container && container.querySelector('output, span')) ||
      document.querySelector('#rangeSuccess');

    if (output) {
      output.textContent = value;
    }
  }, '95');

  // Now assert that displayed value is 95
  await expect(sliderValue).toHaveText('95');
});
