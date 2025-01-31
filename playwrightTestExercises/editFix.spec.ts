import { test } from '@playwright/test';

test('click edit button next to Phaedrum8', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/challenging_dom');

    const row = await page.getByText('Phaedrum8').locator('..');   

    const editButton = row.getByRole('link', { name: 'edit' });

    await editButton.click();
});