import { test, expect } from '@playwright/test';

test('click edit button next to Phaedrum8', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/challenging_dom');
    const text = "Phaedrum8";

    const row = await page.getByText(`${text}`).locator('..');   

    const editButton = row.getByRole('link', { name: 'edit' });

    await editButton.click();

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/challenging_dom#edit')
});