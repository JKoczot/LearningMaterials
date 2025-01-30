import { test } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdownClick = page.locator('select[id="dropdown"]');

    await dropdownClick.click();

    await dropdownClick.selectOption({value: '2'})

});