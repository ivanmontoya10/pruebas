import { test, expect, chromium } from '@playwright/test';

test('moreFilters-Ropa-Playeras', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterRopa = page.locator('button:has(span:has-text("Ropa"))');
    await expect(filterRopa).toBeVisible();
    await filterRopa.click();
  
    const filterPlayeras = page.locator('a.MenuFilters-Link', { hasText: 'PLayeras + camisetas' });
    await expect(filterPlayeras).toBeVisible();
    await filterPlayeras.click();
  
    await page.pause();
});
  
test('moreFilters-Ropa-Leggins', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterRopa = page.locator('button:has(span:has-text("Ropa"))');
    await expect(filterRopa).toBeVisible();
    await filterRopa.click();
  
    const filterLeggins = page.locator('button.MenuFilters-Link', { hasText: 'Leggings + pants' });
    await expect(filterLeggins).toBeVisible();
    await filterLeggins.click();
  
    await page.pause();
});
  
test('moreFilters-Ropa-Shorts', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterRopa = page.locator('button:has(span:has-text("Ropa"))');
    await expect(filterRopa).toBeVisible();
    await filterRopa.click();
  
    const filterShorts = page.locator('button.MenuFilters-Link', { hasText: 'Shorts' });
    await expect(filterShorts).toBeVisible();
    await filterShorts.click();
  
    await page.pause();
});
  
test('moreFilters-Ropa-Chamarras', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterRopa = page.locator('button:has(span:has-text("Ropa"))');
    await expect(filterRopa).toBeVisible();
    await filterRopa.click();
  
    const filterChamarras = page.locator('button.MenuFilters-Link', { hasText: 'Chamarras + Chalecos' });
    await expect(filterChamarras).toBeVisible();
    await filterChamarras.click();
  
    await page.pause();
});
  
test('moreFilters-Ropa-Vestidos', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterRopa = page.locator('button:has(span:has-text("Ropa"))');
    await expect(filterRopa).toBeVisible();
    await filterRopa.click();
  
    const filterVestidos = page.locator('button.MenuFilters-Link', { hasText: 'Vestidos + faldas' });
    await expect(filterVestidos).toBeVisible();
    await filterVestidos.click();
  
    await page.pause();
});
  
test('moreFilters-Ropa-Sudaderas', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterRopa = page.locator('button:has(span:has-text("Ropa"))');
    await expect(filterRopa).toBeVisible();
    await filterRopa.click();
  
    const filterSudaderas = page.locator('button.MenuFilters-Link', { hasText: 'Sudaderas + Suéteres' });
    await expect(filterSudaderas).toBeVisible();
    await filterSudaderas.click();
  
    await page.pause();
});
  
test('moreFilters-Ropa-Jerseys', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterRopa = page.locator('button:has(span:has-text("Ropa"))');
    await expect(filterRopa).toBeVisible();
    await filterRopa.click();
  
    const filterJerseys = page.locator('button.MenuFilters-Link', { hasText: 'Jerseys fútbol' });
    await expect(filterJerseys).toBeVisible();
    await filterJerseys.click();
  
    await page.pause();
});
  
test('moreFilters-Ropa-RopaInterior', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterRopa = page.locator('button:has(span:has-text("Ropa"))');
    await expect(filterRopa).toBeVisible();
    await filterRopa.click();
  
    const filterRopaInterior = page.locator('button.MenuFilters-Link', { hasText: 'Ropa interior' });
    await expect(filterRopaInterior).toBeVisible();
    await filterRopaInterior.click();
  
    await page.pause();
});
  
test('moreFilters-Ropa-Bras', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterRopa = page.locator('button:has(span:has-text("Ropa"))');
    await expect(filterRopa).toBeVisible();
    await filterRopa.click();
  
    const filterBras = page.locator('button.MenuFilters-Link', { hasText: 'Bras deportivos + Tops' });
    await expect(filterBras).toBeVisible();
    await filterBras.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
});
  
test('moreFilters-Ropa-TrajesBano', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterRopa = page.locator('button:has(span:has-text("Ropa"))');
    await expect(filterRopa).toBeVisible();
    await filterRopa.click();
  
    const filterTrajesBano = page.locator('button.MenuFilters-Link', { hasText: 'Trajes de baño' });
    await expect(filterTrajesBano).toBeVisible();
    await filterTrajesBano.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
});