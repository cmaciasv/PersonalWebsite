import { test } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe('Project Detail Page Accessibility', () => {
  test('should have no accessibility violations on Project Detail Page', async ({ page }) => {
    // Navigate to a sample project detail page
    // Assuming '1' is a valid project ID
    await page.goto('/projects/1');

    // Inject axe-core into the page
    await injectAxe(page);

    // Check for accessibility violations
    await checkA11y(page, undefined, {
      axeOptions: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'best-practice'],
        },

      },
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  });

  // Add more tests for different project IDs or scenarios if needed
});