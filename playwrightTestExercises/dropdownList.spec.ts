import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = page.locator('select[id="dropdown"]');

    await dropdown.selectOption({label: 'Option 2'})

    await expect(dropdown).toHaveValue('2');

});