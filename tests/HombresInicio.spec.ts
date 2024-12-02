import { test, expect, chromium } from '@playwright/test';

test('Categoria-Hombres', async ({ page }) => {

  await page.goto('https://mx.puma.com/');

  const clickCredits = page.getByRole('link', { name: 'Hombres' });
  await clickCredits.waitFor({ state: 'visible' });
  await clickCredits.click();

  await page.pause();
});

test('select-product-carrousell-hombres', async ({ page }) => {

  await page.goto('https://mx.puma.com/');

  const clickCredits = page.getByRole('link', { name: 'Hombres' });
  await clickCredits.waitFor({ state: 'visible' });
  await clickCredits.click();
  
  await page.waitForSelector('.ProductCarousel-Wrapper');

  const firstProduct = page.locator('.ProductCarousel-Wrapper .slick-track .slick-slide:not(.slick-cloned) .ProductCard-Link').first();
  await firstProduct.waitFor({ state: 'visible' });
  await firstProduct.click();

  await page.pause();
});


test('select-product-allProducts-hombres', async ({ page }) => {
  await page.goto('https://mx.puma.com/hombres.html');

  const firstAllProducts = page.locator('.ProductList .ProductListPage .ProductCard a').first();
  await expect(firstAllProducts).toBeVisible();
  await firstAllProducts.click();

  await page.waitForSelector('h1.ProductActions-Title');

  const productTitle = page.locator('h1.ProductActions-Title');
  await expect(productTitle).toHaveText('Balón fútbol PUMA Cumbre CONMEBOL Libertadores (FIFA Pro)');

  const productPrice = page.locator('span[itemprop="price"]');
  await expect(productPrice).toHaveText('1499.50');

  const productColor = page.locator('.ProductConfigurableAttributes-ColorSubLabelValue');
  await expect(productColor).toHaveText('PUMA White-PUMA Gold');

  await page.pause();
});

test('select-TallaCantidad', async ({ page }) => {
  await page.goto('https://mx.puma.com/hombres.html');

  const firstAllProducts = page.locator('.ProductList .ProductListPage .ProductCard a').first();
  await expect(firstAllProducts).toBeVisible();
  await firstAllProducts.click();

  const selectDropdown = page.locator('select#size');
  await expect(selectDropdown).toBeVisible();

  await selectDropdown.selectOption({ value: '194' });

  const quantityDropdown = page.locator('select#item_qty');
  await expect(quantityDropdown).toBeVisible();
  await quantityDropdown.selectOption({ value: '2' });

  await page.pause();
});


test('select-colorLink-hombres', async ({ page }) => {
  await page.goto('https://mx.puma.com/hombres.html');

  const firstAllProducts = page.locator('.ProductList .ProductListPage .ProductCard a').first();
  await expect(firstAllProducts).toBeVisible();
  await firstAllProducts.click();

  const selectLinkColor = page.locator('button[class="ProductAttributeValue "]').first();
  await expect(selectLinkColor).toBeVisible();
  await selectLinkColor.click();
  await page.pause();

});

test('moreProducts-button-hombres', async ({ page }) => {

  await page.goto('https://mx.puma.com/hombres.html');

  const buttonMoreProd = page.locator('[class="ProductList-LoadProductsButton ProductList-LoadProductsButton_type_loadMore"]')
  await expect(buttonMoreProd).toBeVisible();
  await buttonMoreProd.click();
  await page.pause();
});

test('showAll-button-hombres', async ({ page }) => {

  await page.goto('https://mx.puma.com/hombres.html');

  const buttonShowAll = page.locator('button[class="ProductList-LoadProductsButton ProductList-LoadProductsButton_type_loadAll Button-AddToCart"]')
  await expect(buttonShowAll).toBeVisible();
  await buttonShowAll.click();
  await page.pause();
});

