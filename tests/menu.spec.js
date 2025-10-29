import { test, expect } from '@playwright/test';

test('has tHome menu', async ({ page }) => {
  await page.goto('https://playground-drab-six.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('link', { name: 'HOME' })).toBeVisible()
});