import { test, expect } from '@playwright/test';

test.describe('Layout', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the Header with navigation links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('should display the Footer with social media links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'GitHub' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
  });
});
