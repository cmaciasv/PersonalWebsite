import { test, expect } from '@playwright/test';
import { runAccessibilityCheck } from '../utils/a11y-check';

test('has title', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(2200); // Wait for 2.2 seconds to allow animations to complete
  await runAccessibilityCheck(page);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Carlos Macias Portfolio - Home");
});

