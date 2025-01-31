import { test } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/challenging_dom');

    await page.click('text=Edit');
    
  });