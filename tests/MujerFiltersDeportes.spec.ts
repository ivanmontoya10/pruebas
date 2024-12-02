import { test, expect, chromium } from '@playwright/test';

test('moreFilters-Deportes-Running', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterDeportes = page.locator('button:has(span:has-text("Deportes"))');
    await expect(filterDeportes).toBeVisible();
    await filterDeportes.click();
  
    const filterRunning = page.locator('button.MenuFilters-Link', { hasText: 'Running' });
    await expect(filterRunning).toBeVisible();
    await filterRunning.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
});

test('moreFilters-Deportes-Motorsport', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterDeportes = page.locator('button:has(span:has-text("Deportes"))');
    await expect(filterDeportes).toBeVisible();
    await filterDeportes.click();
  
    const filterMotorsport = page.locator('button.MenuFilters-Link', { hasText: 'Motorsport' });
    await expect(filterMotorsport).toBeVisible();
    await filterMotorsport.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
});

test('moreFilters-Deportes-Training', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterDeportes = page.locator('button:has(span:has-text("Deportes"))');
    await expect(filterDeportes).toBeVisible();
    await filterDeportes.click();
  
    const filterTraining = page.locator('button.MenuFilters-Link', { hasText: 'Training' });
    await expect(filterTraining).toBeVisible();
    await filterTraining.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
});

test('moreFilters-Deportes-Futbol', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterDeportes = page.locator('button:has(span:has-text("Deportes"))');
    await expect(filterDeportes).toBeVisible();
    await filterDeportes.click();
  
    const filterFutbol = page.locator('button.MenuFilters-Link', { hasText: 'Futbol' });
    await expect(filterFutbol).toBeVisible();
    await filterFutbol.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
});