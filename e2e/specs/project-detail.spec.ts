import { test } from '@playwright/test';
import { runAccessibilityCheck } from '../utils/a11y-check';

test.describe('Project Detail Page Accessibility', () => {
  test('should have no accessibility violations on Project Detail Page', async ({ page }) => {
    // Navigate to a sample project detail page
    // Assuming '1' is a valid project ID
    await page.goto('/projects/1');

    // Run accessibility checks
    await runAccessibilityCheck(page);
  });

  // Add more tests for different project IDs or scenarios if needed
});