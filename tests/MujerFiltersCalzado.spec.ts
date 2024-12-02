import { test, expect, chromium } from '@playwright/test';

test('moreFilters-Calzado-Running', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
  await expect(filterMoreFilters).toBeVisible();
  await filterMoreFilters.click();

  const filterCalzado = page.locator('button:has(span:has-text("Calzado"))');
  await expect(filterCalzado).toBeVisible();
  await filterCalzado.click();

  const filterRunning = page.locator('button.MenuFilters-Link', { hasText: 'Running' });
  await expect(filterRunning).toBeVisible();
  await filterRunning.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('moreFilters-Calzado-Training', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
  await expect(filterMoreFilters).toBeVisible();
  await filterMoreFilters.click();

  const filterCalzado = page.locator('button:has(span:has-text("Calzado"))');
  await expect(filterCalzado).toBeVisible();
  await filterCalzado.click();

  const filterTraining = page.locator('button.MenuFilters-Link', { hasText: 'Training' });
  await expect(filterTraining).toBeVisible();
  await filterTraining.click();
  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('moreFilters-Calzado-Sandalias', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
  await expect(filterMoreFilters).toBeVisible();
  await filterMoreFilters.click();

  const filterCalzado = page.locator('button:has(span:has-text("Calzado"))');
  await expect(filterCalzado).toBeVisible();
  await filterCalzado.click();

  const filterSandalias = page.locator('button.MenuFilters-Link', { hasText: 'Sandalias' });
  await expect(filterSandalias).toBeVisible();
  await filterSandalias.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('moreFilters-Calzado-Basquet', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
  await expect(filterMoreFilters).toBeVisible();
  await filterMoreFilters.click();

  const filterCalzado = page.locator('button:has(span:has-text("Calzado"))');
  await expect(filterCalzado).toBeVisible();
  await filterCalzado.click();

  const filterBasquet = page.locator('button.MenuFilters-Link', { hasText: 'Básquetbol' });
  await expect(filterBasquet).toBeVisible();
  await filterBasquet.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('moreFilters-Calzado-Fut', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
  await expect(filterMoreFilters).toBeVisible();
  await filterMoreFilters.click();

  const filterCalzado = page.locator('button:has(span:has-text("Calzado"))');
  await expect(filterCalzado).toBeVisible();
  await filterCalzado.click();

  const filterFutbol = page.locator('button.MenuFilters-Link', { hasText: 'Fútbol' });
  await expect(filterFutbol).toBeVisible();
  await filterFutbol.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('moreFilters-Calzado-MotorSport', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
  await expect(filterMoreFilters).toBeVisible();
  await filterMoreFilters.click();

  const filterCalzado = page.locator('button:has(span:has-text("Calzado"))');
  await expect(filterCalzado).toBeVisible();
  await filterCalzado.click();

  const filterMotorsport = page.locator('button.MenuFilters-Link', { hasText: 'Motorsport' });
  await expect(filterMotorsport).toBeVisible();
  await filterMotorsport.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('moreFilters-Calzado-Lifestyle', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
  await expect(filterMoreFilters).toBeVisible();
  await filterMoreFilters.click();

  const filterCalzado = page.locator('button:has(span:has-text("Calzado"))');
  await expect(filterCalzado).toBeVisible();
  await filterCalzado.click();

  const filterLifestyle = page.locator('button.MenuFilters-Link', { hasText: 'Lifestyle' });
  await expect(filterLifestyle).toBeVisible();
  await filterLifestyle.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('moreFilters-Calzado-Botas', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterMoreFilters = page.locator('div[class="CategoryPage-MoreFiltersButton"]');
  await expect(filterMoreFilters).toBeVisible();
  await filterMoreFilters.click();

  const filterCalzado = page.locator('button:has(span:has-text("Calzado"))');
  await expect(filterCalzado).toBeVisible();
  await filterCalzado.click();

  const filterBotas = page.locator('a.MenuFilters-Link', { hasText: 'Botas' });
  await expect(filterBotas).toBeVisible();
  await filterBotas.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});