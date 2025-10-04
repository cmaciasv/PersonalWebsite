import { Page } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

export async function runAccessibilityCheck(page: Page) {
  await injectAxe(page);
  await checkA11y(page, null, {
    axeOptions: {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'best-practice'],
      },
    },
    detailedReport: true,
    detailedReportOptions: { html: true },
  });
}