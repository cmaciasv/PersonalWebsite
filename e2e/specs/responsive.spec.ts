import { test, expect } from '@playwright/test';
import { runAccessibilityCheck } from '../utils/a11y-check';

test.describe('Responsive Design', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await runAccessibilityCheck(page);
  });

  test('navigation menu adapts to mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE

    // Expect hamburger menu to be visible
    const menuButton = page.getByLabel('Toggle navigation');
    await expect(menuButton).toBeVisible();

    // Expect navigation links to be hidden initially
    const navLinks = page.locator('nav ul');
    await expect(navLinks).toBeHidden();

    // Click hamburger menu and expect links to be visible
    await menuButton.click();
    await expect(navLinks).toBeVisible();

    // Expect navigation links to be clickable
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();

    // Check desktop view
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(menuButton).toBeHidden();
    await expect(navLinks).toBeVisible();
  });

  test('text readability and layout integrity on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE

    // Check Home page content
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByText('I build software that delights users')).toBeVisible();

    // Navigate to About page and check content
    await page.getByLabel('Toggle navigation').click();
    await page.getByRole('link', { name: 'About' }).click();
    await runAccessibilityCheck(page);
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
    await expect(page.getByText('Senior Software Engineer with over 10 years of experience')).toBeVisible();

    // Navigate to Contact page and check content
    await page.getByLabel('Toggle navigation').click();
    await page.getByRole('link', { name: 'Contact' }).click();
    await runAccessibilityCheck(page);
    await expect(page.getByRole('heading', { name: 'Get in Touch' })).toBeVisible();
    await expect(page.getByText('I\'m always open to new opportunities and collaborations.')).toBeVisible();
  });

  test('interactive elements are mobile-friendly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE

    // Check Home page button
    await expect(page.getByRole('link', { name: 'View My Work' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'View My Work' })).toHaveCSS('padding-top', '12px');
    await expect(page.getByRole('link', { name: 'View My Work' })).toHaveCSS('padding-bottom', '12px');
    await expect(page.getByRole('link', { name: 'View My Work' })).toHaveCSS('padding-left', '24px');
    await expect(page.getByRole('link', { name: 'View My Work' })).toHaveCSS('padding-right', '24px');

    // Navigate to Contact page and check buttons
    await page.getByLabel('Toggle navigation').click();
    await page.getByRole('link', { name: 'Contact' }).click();
    await runAccessibilityCheck(page);
    await expect(page.getByRole('link', { name: 'Email Me' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Email Me' })).toHaveCSS('padding', '12px 24px');
    await expect(page.getByRole('main').getByRole('link', { name: 'GitHub' })).toBeVisible();
    await expect(page.getByRole('main').getByRole('link', { name: 'GitHub' })).toHaveCSS('padding', '12px 24px');
    await expect(page.getByRole('main').getByRole('link', { name: 'LinkedIn' })).toBeVisible();
    await expect(page.getByRole('main').getByRole('link', { name: 'LinkedIn' })).toHaveCSS('padding', '12px 24px');
  });
});

test('projects gallery page adapts to different viewports', async ({ page }) => {
  await page.goto('/projects');
  await runAccessibilityCheck(page);

  // Test on a mobile viewport
  await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
  let projectCards = await page.locator('a[href^="/projects/"]').all(); // Select Link elements that navigate to project pages
  // Expect cards to be arranged in a single column or stacked
  // This is a heuristic, actual implementation might vary
  expect(projectCards.length).toBeGreaterThan(0);
  // Further assertions could involve checking CSS properties like flex-direction or grid-template-columns

  
  // Test on a tablet viewport
  await page.setViewportSize({ width: 768, height: 1024 }); // iPad Mini
  projectCards = await page.locator('a[href^="/projects/"]').all();

  // Test on a desktop viewport
  await page.setViewportSize({ width: 1280, height: 720 }); // Standard Desktop
  projectCards = await page.locator('a[href^="/projects/"]').all();
});
