import { test, expect } from '@playwright/test';
import { runAccessibilityCheck } from '../utils/a11y-check';

test('has title', async ({ page }) => {
  await page.goto('/');
  await runAccessibilityCheck(page);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Personal Portfolio Website");
});

