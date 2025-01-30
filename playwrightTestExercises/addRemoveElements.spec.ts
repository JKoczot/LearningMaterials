import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    // Click Add Element button five times. 
    for (let i = 0; i < 5; i++){
    await page.click('button:has-text("Add Element")');
    }

    // Check if there are 5 buttons shown.
    const deleteButtons = page.locator('#elements .added-manually');
    await expect(deleteButtons).toHaveCount(5);

    // Click Delete button three times.
    for (let i = 0; i < 3; i++){
        await page.click('button:has-text("Delete")');
        }

    // Check if there are 2 buttons shown. 
    await expect(deleteButtons).toHaveCount(2);

  });