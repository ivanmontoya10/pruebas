import { test, expect, chromium } from '@playwright/test';

test('filter-category-ropa', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterCategory = page.locator('button:has(span:has-text("Categoría de producto"))');
  await expect(filterCategory).toBeVisible();
  await filterCategory.click();

  const filterRopa = page.locator('label[for="Ropa"]');
  await expect(filterRopa).toBeVisible();
  await filterRopa.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();

});

test('filter-category-calzado', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterCategory = page.locator('button:has(span:has-text("Categoría de producto"))');
  await expect(filterCategory).toBeVisible();
  await filterCategory.click();

  const filterCalzado = page.locator('label[for="Calzado"]');
  await expect(filterCalzado).toBeVisible();
  await filterCalzado.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();

});

test('filter-category-accesorios', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterCategory = page.locator('button:has(span:has-text("Categoría de producto"))');
  await expect(filterCategory).toBeVisible();
  await filterCategory.click();

  const filterAccesorios = page.locator('label[for="Accesorios"]');
  await expect(filterAccesorios).toBeVisible();
  await filterAccesorios.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();

});