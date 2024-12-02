import { test, expect, chromium } from '@playwright/test';

test('moreFilters-Acc-Mochilas', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterAccesorios = page.locator('button:has(span:has-text("Accesorios"))');
    await expect(filterAccesorios).toBeVisible();
    await filterAccesorios.click();
  
    const filterMochilas = page.locator('button.MenuFilters-Link', { hasText: 'Mochilas + bolsas' });
    await expect(filterMochilas).toBeVisible();
    await filterMochilas.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
});

test('moreFilters-Acc-Guantes', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterAccesorios = page.locator('button:has(span:has-text("Accesorios"))');
    await expect(filterAccesorios).toBeVisible();
    await filterAccesorios.click();
  
    const filterGuantes = page.locator('button.MenuFilters-Link', { hasText: 'Guantes' });
    await expect(filterGuantes).toBeVisible();
    await filterGuantes.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
});

test('moreFilters-Acc-Gorras', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterAccesorios = page.locator('button:has(span:has-text("Accesorios"))');
    await expect(filterAccesorios).toBeVisible();
    await filterAccesorios.click();
  
    const filterGorras = page.locator('button.MenuFilters-Link', { hasText: 'Gorras + gorros' });
    await expect(filterGorras).toBeVisible();
    await filterGorras.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
});

test('moreFilters-Acc-EquipoDep', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
    await expect(filterMoreFilters).toBeVisible();
    await filterMoreFilters.click();
  
    const filterAccesorios = page.locator('button:has(span:has-text("Accesorios"))');
    await expect(filterAccesorios).toBeVisible();
    await filterAccesorios.click();
  
    const filterEquipoDep = page.locator('button.MenuFilters-Link', { hasText: 'Equipo deportivo' });
    await expect(filterEquipoDep).toBeVisible();
    await filterEquipoDep.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
});