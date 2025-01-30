import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const checkBoxes = page.locator('input[type="checkbox"]')

    for (let i = 0; i < await checkBoxes.count(); i++) {
        const checkBox = checkBoxes.nth(i);
        if (!(await checkBox.isChecked())) {
            await checkBox.click();
        }
    }

    for (let i = 0; i < await checkBoxes.count(); i++) {
        const checkBox = checkBoxes.nth(i);
        await expect(checkBox).toBeChecked();
    }

  });