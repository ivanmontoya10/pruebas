import { test, expect, chromium } from '@playwright/test';

test('filter-sex-Mujer', async ({ page }) => {

    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterSex = page.locator('button:has(span:has-text("Sexo"))');
    await expect(filterSex).toBeVisible();
    await filterSex.click();
  
    const filterSexMujer = page.locator('label[for="Mujer"]');
    await expect(filterSexMujer).toBeVisible();
    await filterSexMujer.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();

    await page.pause();
  
  });

  test('filter-sex-Unisex', async ({ page }) => {

    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterSex = page.locator('button[class="ExpandableContent-Button ProductConfigurableAttributes-ExpandableContentButton"]').first();
    await expect(filterSex).toBeVisible();
    await filterSex.click();
    
    const filterSexUnisex = page.locator('label[for="Unisex"]');
    await expect(filterSexUnisex).toBeVisible();
    await filterSexUnisex.click();
  
    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
  
  });

  test('filter-sex-Hombre', async ({ page }) => {

    await page.goto('https://mx.puma.com/mujeres.html');
  
    const filterSex = page.locator('button[class="ExpandableContent-Button ProductConfigurableAttributes-ExpandableContentButton"]').first();
    await expect(filterSex).toBeVisible();
    await filterSex.click();
  
    const filterSexHombre = page.locator('label[for="Hombre"]');
    await expect(filterSexHombre).toBeVisible();
    await filterSexHombre.click();

    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();
  
    await page.pause();
  
  });