import { test, expect, chromium } from '@playwright/test';


test('moreFilters', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
  await expect(filterMoreFilters).toBeVisible();
  await filterMoreFilters.click();

  await page.pause();
});



