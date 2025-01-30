import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://clickchat.pl/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ClickChat/);
});

test('get started link', async ({ page }) => {
    await page.goto('https://clickchat.pl/');

    // Click to accept cookies banner.
    await page.click('button.btn.btn-primary:has-text("Zgadzam się")');

    // Click the get produkty link.
    await page.getByRole('link', { name: 'Skontaktuj się z nami' }).click();

    // Expects page to have a heading with the name of ClickChat | Produkty.
    await expect(page.getByRole('heading', { name: 'Skontaktuj się z nami' })).toBeVisible();

    // Close the page.
    await page.close();
  });