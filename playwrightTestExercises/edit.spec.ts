import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/challenging_dom');
    const text = "Iuvaret8"

    const editButtonLocator = page.locator(`tr:has-text("${text}") >> text=Edit`);
    await editButtonLocator.click();

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/challenging_dom#edit')
    
  });