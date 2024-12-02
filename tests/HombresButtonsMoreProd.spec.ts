import { test, expect, chromium } from '@playwright/test';

test('HombresMoreProducts-button', async ({ page }) => {

  await page.goto('https://mx.puma.com/hombres.html');

  const buttonMoreProd = page.locator('[class="ProductList-LoadProductsButton ProductList-LoadProductsButton_type_loadMore"]')
  await expect(buttonMoreProd).toBeVisible();
  await buttonMoreProd.click();
  await page.pause();
});

test('HombreShowAll-button', async ({ page }) => {

  await page.goto('https://mx.puma.com/hombres.html');

  const buttonShowAll = page.locator('button[class="ProductList-LoadProductsButton ProductList-LoadProductsButton_type_loadAll Button-AddToCart"]')
  await expect(buttonShowAll).toBeVisible();
  await buttonShowAll.click();
  await page.pause();
});
