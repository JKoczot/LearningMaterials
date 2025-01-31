import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
   
   const checkBoxes = page.locator('input[type="checkbox"]');
   const count = await checkBoxes.count();

   
   for (let i = 0; i < count; i++) {
       await checkBoxes.nth(i).check();  
       await expect(checkBoxes.nth(i)).toBeChecked(); 
   }

  });