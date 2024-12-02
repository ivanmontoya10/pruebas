import { test, expect, chromium } from '@playwright/test';

test('select-AdolescenteHombre-Kids', async ({ page }) => {

    await page.goto('https://mx.puma.com/minicats');

    const adolescenteHombreSection = page.locator('.side-by-side-item__title:has-text("ADOLESCENTE HOMBRE")');
    await expect(adolescenteHombreSection).toBeVisible();

    const buyButton = adolescenteHombreSection.locator('xpath=following-sibling::a[@class="btn btn_content side-by-side-item__button"]');
    await expect(buyButton).toBeVisible();
    await buyButton.click();

    await expect(page).toHaveURL('https://mx.puma.com/ninos/ninos/edades-8-16-anos.html');

    await page.pause();
});

test('select-product-AdolescenteHombre-kids', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninos/edades-8-16-anos.html');

    const firstAllProducts = page.locator('.ProductList .ProductListPage .ProductCard a').first();
    await expect(firstAllProducts).toBeVisible();
    await firstAllProducts.click();

    await page.waitForSelector('h1.ProductActions-Title');

    const productTitle = page.locator('h1.ProductActions-Title');
    await expect(productTitle).toHaveText('Playera adolescentes Scuderia Ferrari Dylan');

    const productPrice = page.locator('span[itemprop="price"]');
    await expect(productPrice).toHaveText('374.50');

    const productColor = page.locator('.ProductConfigurableAttributes-ColorSubLabelValue');
    await expect(productColor).toHaveText('Puma White');

    await page.pause();
});

test('select-TallaCantidadKids-AdolescenteHombre', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninos/edades-8-16-anos.html');

    const firstAllProducts = page.locator('.ProductList .ProductListPage .ProductCard a').first();
    await expect(firstAllProducts).toBeVisible();
    await firstAllProducts.click();

    const selectDropdown = page.locator('select#size');
    await expect(selectDropdown).toBeVisible();
    const firstSizeOption = await selectDropdown.locator('option').first();
    const sizeValue = await firstSizeOption.getAttribute('value');
    await selectDropdown.selectOption(sizeValue);

    const quantityDropdown = page.locator('select#item_qty');
    await expect(quantityDropdown).toBeVisible();
    const firstQuantityOption = await quantityDropdown.locator('option').first();
    const quantityValue = await firstQuantityOption.getAttribute('value');
    await quantityDropdown.selectOption(quantityValue);

    await page.pause();
});


test('select-colorLink-Kids-AdolescenteHombre', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninos/edades-8-16-anos.html');

    const firstAllProducts = page.locator('.ProductList .ProductListPage .ProductCard a').first();
    await expect(firstAllProducts).toBeVisible();
    await firstAllProducts.click();

    const selectLinkColor = page.locator('button[class="ProductAttributeValue "]').first();
    await expect(selectLinkColor).toBeVisible();
    await selectLinkColor.click();

    await page.pause();

});


test('KidsAddFiltersAdolescenteHombre', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninos/edades-8-16-anos.html');

    const filterCategory = page.locator('button:has(span:has-text("Categoría de producto"))');
    await expect(filterCategory).toBeVisible();
    await filterCategory.click();

    const filterCalzado = page.locator('label[for="Ropa"]');
    await expect(filterCalzado).toBeVisible();
    await filterCalzado.click();

    const filterColor = page.locator('button:has(span:has-text("Color"))');
    await expect(filterColor).toBeVisible();
    await filterColor.click();

    const filterColorBlack = page.locator('data[value="Rojo"]');
    await expect(filterColorBlack).toBeVisible();
    await filterColorBlack.click();

    await page.pause();
});

test('KidsDeleteOneFilterAdolescenteHombre', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninos/edades-8-16-anos.html');

    const filterCategory = page.locator('button:has(span:has-text("Categoría de producto"))');
    await expect(filterCategory).toBeVisible();
    await filterCategory.click();

    const filterCalzado = page.locator('label[for="Ropa"]');
    await expect(filterCalzado).toBeVisible();
    await filterCalzado.click();

    const filterColor = page.locator('button:has(span:has-text("Color"))');
    await expect(filterColor).toBeVisible();
    await filterColor.click();

    const filterColorBlack = page.locator('data[value="Rojo"]');
    await expect(filterColorBlack).toBeVisible();
    await filterColorBlack.click();

    const clearFilter = page.locator('div[role="button"]:has-text("Categoría de producto: Ropa")');
    await expect(clearFilter).toBeVisible();
    await clearFilter.click();


    await page.pause();
});

test('KidsDeleteFiltersAdolescenteHombre', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninos/edades-8-16-anos.html');

    const filterCategory = page.locator('button:has(span:has-text("Categoría de producto"))');
    await expect(filterCategory).toBeVisible();
    await filterCategory.click();

    const filterCalzado = page.locator('label[for="Ropa"]');
    await expect(filterCalzado).toBeVisible();
    await filterCalzado.click();

    const filterColor = page.locator('button:has(span:has-text("Color"))');
    await expect(filterColor).toBeVisible();
    await filterColor.click();

    const filterColorBlack = page.locator('data[value="Rojo"]');
    await expect(filterColorBlack).toBeVisible();
    await filterColorBlack.click();

    const clearFilter = page.locator('div[role="button"]:has-text("Borrar filtro")');
    await expect(clearFilter).toBeVisible();
    await clearFilter.click();

    await page.pause();
});