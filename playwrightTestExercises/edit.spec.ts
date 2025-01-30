import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/challenging_dom');

    const editButtonLocator = page.locator('tr:has-text("Iuvaret8") >> text=Edit');
    await editButtonLocator.click();
    
  });