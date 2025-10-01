import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Create Next App");
});

test('read our docs link', async ({ page }) => {
  await page.goto('/');

  // Click the "Read our docs" link.
  await page.getByRole('link', { name: 'Read our docs' }).click();

  // Expects page to navigate to the docs page.
  await expect(page).toHaveURL("http://localhost:3000/");
});
