import { test, expect, chromium } from '@playwright/test';

test('FilterOrderAgeAscendente', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');

    const selectDropdown = page.getByLabel('Select drop-down');
    await expect(selectDropdown).toBeVisible();
    await selectDropdown.click();

    const optionToSelect = page.locator('li span', { hasText: 'Age: ascendente' });
    await expect(optionToSelect).toBeVisible();
    await optionToSelect.click();

    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();

    await page.pause();
});

test('FilterOrderAgeDescendente', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');

    const selectDropdown = page.getByLabel('Select drop-down');
    await expect(selectDropdown).toBeVisible();
    await selectDropdown.click();

    const optionToSelect = page.locator('li span', { hasText: 'Age: descendente' });
    await expect(optionToSelect).toBeVisible();
    await optionToSelect.click();

    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();

    await page.pause();
});

test('FilterOrderArticleAscendente', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');

    const selectDropdown = page.getByLabel('Select drop-down');
    await expect(selectDropdown).toBeVisible();
    await selectDropdown.click();

    const optionToSelect = page.locator('li span', { hasText: 'Article: Ascendente' });
    await expect(optionToSelect).toBeVisible();
    await optionToSelect.click();

    await page.pause();
});

test('FilterOrderArticleDescendente', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');

    const selectDropdown = page.getByLabel('Select drop-down');
    await expect(selectDropdown).toBeVisible();
    await selectDropdown.click();

    const optionToSelect = page.locator('li span', { hasText: 'Article: Descendente' });
    await expect(optionToSelect).toBeVisible();
    await optionToSelect.click();

    await page.pause();
});

test('FilterOrderDateAscendente', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');

    const selectDropdown = page.getByLabel('Select drop-down');
    await expect(selectDropdown).toBeVisible();
    await selectDropdown.click();

    const optionToSelect = page.locator('li span', { hasText: 'Date: ascendente' });
    await expect(optionToSelect).toBeVisible();
    await optionToSelect.click();

    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();

    await page.pause();
});

test('FilterOrderDateDescendente', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');

    const selectDropdown = page.getByLabel('Select drop-down');
    await expect(selectDropdown).toBeVisible();
    await selectDropdown.click();

    const optionToSelect = page.locator('li span', { hasText: 'Date: descendente' });
    await expect(optionToSelect).toBeVisible();
    await optionToSelect.click();

    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();

    await page.pause();
});

test('FilterOrderNombreProductAscendente', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');

    const selectDropdown = page.getByLabel('Select drop-down');
    await expect(selectDropdown).toBeVisible();
    await selectDropdown.click();

    const optionToSelect = page.locator('li span', { hasText: 'Nombre del producto: asc' });
    await expect(optionToSelect).toBeVisible();
    await optionToSelect.click();

    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();

    await page.pause();
});

test('FilterOrderNombreProductDescendente', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');

    const selectDropdown = page.getByLabel('Select drop-down');
    await expect(selectDropdown).toBeVisible();
    await selectDropdown.click();

    const optionToSelect = page.locator('li span', { hasText: 'Nombre del producto: desc' });
    await expect(optionToSelect).toBeVisible();
    await optionToSelect.click();

    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();

    await page.pause();
});
test('FilterOrderPred', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');

    const selectDropdown = page.getByLabel('Select drop-down');
    await expect(selectDropdown).toBeVisible();
    await selectDropdown.click();

    const optionToSelect = page.locator('li span', { hasText: 'Orden predeterminado' });
    await expect(optionToSelect).toBeVisible();
    await optionToSelect.click();

    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();

    await page.pause();
});

test('FilterRangoPreciosAscendente', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');

    const selectDropdown = page.getByLabel('Select drop-down');
    await expect(selectDropdown).toBeVisible();
    await selectDropdown.click();

    await page.waitForTimeout(1000); // Puedes ajustar el tiempo si es necesario

    const optionToSelect = page.locator('li span', { hasText: 'RANGO DE PRECIOS: asc' });
    await expect(optionToSelect).toBeVisible();
    await optionToSelect.click();

    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();

    await page.pause();
});

test('FilterRangoPreciosDescendente', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');

    const selectDropdown = page.getByLabel('Select drop-down');
    await expect(selectDropdown).toBeVisible();
    await selectDropdown.click();

    await page.waitForTimeout(1000); // Puedes ajustar el tiempo si es necesario

    const optionToSelect = page.locator('li span', { hasText: 'RANGO DE PRECIO: desc' });
    await expect(optionToSelect).toBeVisible();
    await optionToSelect.click();

    const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
    await expect(firstProduct).toBeVisible();
    
    const firstProductLink = firstProduct.locator('a.ProductCard-Link');
    await firstProductLink.click();

    await page.pause();
});