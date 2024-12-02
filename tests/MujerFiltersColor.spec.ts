import { test, expect, chromium } from '@playwright/test';

test('filter-color-Black', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterColor = page.locator('button:has(span:has-text("Color"))');
  await expect(filterColor).toBeVisible();
  await filterColor.click();

  const filterColorBlack = page.locator('data[value="Negro"]');
  await expect(filterColorBlack).toBeVisible();
  await filterColorBlack.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-color-White', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterColor = page.locator('button:has(span:has-text("Color"))');
  await expect(filterColor).toBeVisible();
  await filterColor.click();

  const filterColorWhite = page.locator('data[value="Blanco"]');
  await expect(filterColorWhite).toBeVisible();
  await filterColorWhite.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-color-Grey', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterColor = page.locator('button:has(span:has-text("Color"))');
  await expect(filterColor).toBeVisible();
  await filterColor.click();

  const filterColorGrey = page.locator('data[value="Gris"]');
  await expect(filterColorGrey).toBeVisible();
  await filterColorGrey.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-color-Green', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterColor = page.locator('button:has(span:has-text("Color"))');
  await expect(filterColor).toBeVisible();
  await filterColor.click();

  const filterColorGreen = page.locator('data[value="Verde"]');
  await expect(filterColorGreen).toBeVisible();
  await filterColorGreen.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-color-Yellow', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterColor = page.locator('button:has(span:has-text("Color"))');
  await expect(filterColor).toBeVisible();
  await filterColor.click();

  const filterColorYellow = page.locator('data[value="Amarrillo"]');
  await expect(filterColorYellow).toBeVisible();
  await filterColorYellow.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-color-Brown', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterColor = page.locator('button:has(span:has-text("Color"))');
  await expect(filterColor).toBeVisible();
  await filterColor.click();

  const filterColorBrown = page.locator('data[value="Marrón"]');
  await expect(filterColorBrown).toBeVisible();
  await filterColorBrown.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-color-Pink', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterColor = page.locator('button:has(span:has-text("Color"))');
  await expect(filterColor).toBeVisible();
  await filterColor.click();

  const filterColorPink = page.locator('data[value="Rosado"]');
  await expect(filterColorPink).toBeVisible();
  await filterColorPink.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});


test('filter-color-Blue', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterColor = page.locator('button:has(span:has-text("Color"))');
  await expect(filterColor).toBeVisible();
  await filterColor.click();

  const filterColorBlue = page.locator('data[value="Azul"]');
  await expect(filterColorBlue).toBeVisible();
  await filterColorBlue.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-color-Purple', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterColor = page.locator('button:has(span:has-text("Color"))');
  await expect(filterColor).toBeVisible();
  await filterColor.click();

  const filterColorPurple = page.locator('data[value="Morado"]');
  await expect(filterColorPurple).toBeVisible();
  await filterColorPurple.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-color-Beige', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterColor = page.locator('button:has(span:has-text("Color"))');
  await expect(filterColor).toBeVisible();
  await filterColor.click();

  const filterColorBeige = page.locator('data[value="Beige"]');
  await expect(filterColorBeige).toBeVisible();
  await filterColorBeige.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-color-Orange', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterColor = page.locator('button:has(span:has-text("Color"))');
  await expect(filterColor).toBeVisible();
  await filterColor.click();

  const filterColorOrange = page.locator('data[value="Naranja"]');
  await expect(filterColorOrange).toBeVisible();
  await filterColorOrange.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-color-Red', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterColor = page.locator('button:has(span:has-text("Color"))');
  await expect(filterColor).toBeVisible();
  await filterColor.click();

  const filterColorRed = page.locator('data[value="Rojo"]');
  await expect(filterColorRed).toBeVisible();
  await filterColorRed.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-color-Multicolor', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterColor = page.locator('button:has(span:has-text("Color"))');
  await expect(filterColor).toBeVisible();
  await filterColor.click();

  const filterColorMulticolor = page.locator('data[value="Multicolor"]');
  await expect(filterColorMulticolor).toBeVisible();
  await filterColorMulticolor.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-color-Metallic', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterColor = page.locator('button:has(span:has-text("Color"))');
  await expect(filterColor).toBeVisible();
  await filterColor.click();

  const filterColorMetallic = page.locator('label[for="130 - Metallic"]');
  await expect(filterColorMetallic).toBeVisible();
  await filterColorMetallic.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});




