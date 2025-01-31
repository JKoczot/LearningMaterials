import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    const x: number = 5; 
    const y:number = 3;

    for (let i = 0; i < x; i++){
    await page.click('button:has-text("Add Element")');
    }

    const deleteButtons = page.locator('#elements .added-manually');
    await expect(deleteButtons).toHaveCount(x);

    for (let i = 0; i < y; i++){
        await page.click('button:has-text("Delete")');
        }

    await expect(deleteButtons).toHaveCount(x-y);

  });