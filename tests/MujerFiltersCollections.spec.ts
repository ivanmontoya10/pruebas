import { test, expect, chromium } from '@playwright/test';

test('moreFilters-Collections-Rebajas', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterCollections = page.locator('button:has(span:has-text("Collections"))');
    await expect(filterCollections).toBeVisible();
    await filterCollections.click();
  
    const filterRebajas = page.locator('a.MenuFilters-Link', { hasText: 'Rebajas' });
    await expect(filterRebajas).toBeVisible();
    await filterRebajas.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
});

test('moreFilters-Collections-BestSellers', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterCollections = page.locator('button:has(span:has-text("Collections"))');
    await expect(filterCollections).toBeVisible();
    await filterCollections.click();
  
    const filterBestSellers = page.locator('a.MenuFilters-Link', { hasText: 'Best sellers' });
    await expect(filterBestSellers).toBeVisible();
    await filterBestSellers.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
});

test('moreFilters-Collections-Exclusivos', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterCollections = page.locator('button:has(span:has-text("Collections"))');
    await expect(filterCollections).toBeVisible();
    await filterCollections.click();
  
    const filterExclusivos = page.locator('a.MenuFilters-Link', { hasText: 'Exclusivos Online Mujer' });
    await expect(filterExclusivos).toBeVisible();
    await filterExclusivos.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
});