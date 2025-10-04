import { test, expect } from '@playwright/test';
import { runAccessibilityCheck } from '../utils/a11y-check';

test.describe('Static Pages Content', () => {

  test('Home Page should display correct content', async ({ page }) => {
    await page.goto('/');
    await runAccessibilityCheck(page);
    await expect(page).toHaveTitle("Personal Portfolio Website");
    await expect(page.getByRole('heading', { name: /Carlos Macias: Engineer, Creator, Problem-Solver./i })).toBeVisible();
    await expect(page.getByText(/I build software that delights users/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /View My Work/i })).toBeVisible();
  });

  test('About Page should display correct content', async ({ page }) => {
    await page.goto('/about');
    await runAccessibilityCheck(page);
    await expect(page.getByRole('heading', { name: /About Me/i })).toBeVisible();
    await expect(page.getByText(/Senior Software Engineer with over 10 years of experience/i)).toBeVisible();
    await expect(page.getByRole('heading', { name: /Skills/i })).toBeVisible();
    await expect(page.getByText(/Languages:/i)).toBeVisible();
  });

  test('Contact Page should display correct content and links', async ({ page }) => {
    await page.goto('/contact');
    await runAccessibilityCheck(page);
    await expect(page.getByRole('heading', { name: /Get in Touch/i })).toBeVisible();
    await expect(page.getByText(/I'm always open to new opportunities and collaborations./i)).toBeVisible();
    await expect(page.getByRole('main').getByRole('link', { name: /Email Me/i })).toBeVisible();
    await expect(page.getByRole('main').getByRole('link', { name: /GitHub/i })).toBeVisible();
    await expect(page.getByRole('main').getByRole('link', { name: /LinkedIn/i })).toBeVisible();
  });
});
