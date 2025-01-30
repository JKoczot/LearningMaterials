import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    const textField = page.locator('input[type="text"]');
    const textToType: string = "This field was tested properly.";

    await page.click('button:has-text("Enable")');

    await page.waitForSelector('div[id="loading"]', {state: 'hidden'});

    await textField.fill(textToType);

});