import { test, expect, chromium } from '@playwright/test';

test('select-AdolescenteMujer-Kids', async ({ page }) => {

    await page.goto('https://mx.puma.com/minicats');

    const adolescenteMujerSection = page.locator('.side-by-side-item__title:has-text("ADOLESCENTE MUJER")');
    await expect(adolescenteMujerSection).toBeVisible();

    const buyButton = adolescenteMujerSection.locator('xpath=following-sibling::a[@class="btn btn_content side-by-side-item__button"]');
    await expect(buyButton).toBeVisible();
    await buyButton.click();

    await expect(page).toHaveURL('https://mx.puma.com/ninos/ninas/edades-8-16-anos.html?page=1');

    await page.pause();
});

test('select-product-AdolescenteMujer-kids', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninas/edades-8-16-anos.html?page=1');

    const firstAllProducts = page.locator('.ProductList .ProductListPage .ProductCard a').first();
    await expect(firstAllProducts).toBeVisible();
    await firstAllProducts.click();

    await page.waitForSelector('h1.ProductActions-Title');

    const productTitle = page.locator('h1.ProductActions-Title');
    await expect(productTitle).toHaveText('Playera Adolescente manga larga LAVA LAND');

    const productPrice = page.locator('span[itemprop="price"]');
    await expect(productPrice).toHaveText('274.50');

    const productColor = page.locator('.ProductConfigurableAttributes-ColorSubLabelValue');
    await expect(productColor).toHaveText('Pale Plum');

    await page.pause();
});

test('select-TallaCantidadKids-AdolescenteMujer', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninas/edades-8-16-anos.html?page=1');

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


test('select-colorLink-Kids-AdolescenteMujer', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninas/edades-8-16-anos.html?page=1');

    const firstAllProducts = page.locator('.ProductList .ProductListPage .ProductCard a').first();
    await expect(firstAllProducts).toBeVisible();
    await firstAllProducts.click();

    const selectLinkColor = page.locator('button[class="ProductAttributeValue "]').first();
    await expect(selectLinkColor).toBeVisible();
    await selectLinkColor.click();

    await page.pause();

});


test('KidsAddFiltersAdolescenteMujer', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninas/edades-8-16-anos.html?page=1');

    const filterCategory = page.locator('button:has(span:has-text("Categoría de producto"))');
    await expect(filterCategory).toBeVisible();
    await filterCategory.click();

    const filterCalzado = page.locator('label[for="Ropa"]');
    await expect(filterCalzado).toBeVisible();
    await filterCalzado.click();

    const filterColor = page.locator('button:has(span:has-text("Color"))');
    await expect(filterColor).toBeVisible();
    await filterColor.click();

    const filterColorBlack = page.locator('data[value="Negro"]');
    await expect(filterColorBlack).toBeVisible();
    await filterColorBlack.click();

    await page.pause();
});

test('KidsDeleteOneFilterAdolescenteMujer', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninas/edades-8-16-anos.html?page=1');

    const filterCategory = page.locator('button:has(span:has-text("Categoría de producto"))');
    await expect(filterCategory).toBeVisible();
    await filterCategory.click();

    const filterCalzado = page.locator('label[for="Ropa"]');
    await expect(filterCalzado).toBeVisible();
    await filterCalzado.click();

    const filterColor = page.locator('button:has(span:has-text("Color"))');
    await expect(filterColor).toBeVisible();
    await filterColor.click();

    const filterColorBlack = page.locator('data[value="Negro"]');
    await expect(filterColorBlack).toBeVisible();
    await filterColorBlack.click();

    const clearFilter = page.locator('div[role="button"]:has-text("Categoría de producto: Ropa")');
    await expect(clearFilter).toBeVisible();
    await clearFilter.click();


    await page.pause();
});

test('KidsDeleteFiltersAdolescenteMujer', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninas/edades-8-16-anos.html?page=1');

    const filterCategory = page.locator('button:has(span:has-text("Categoría de producto"))');
    await expect(filterCategory).toBeVisible();
    await filterCategory.click();

    const filterCalzado = page.locator('label[for="Ropa"]');
    await expect(filterCalzado).toBeVisible();
    await filterCalzado.click();

    const filterColor = page.locator('button:has(span:has-text("Color"))');
    await expect(filterColor).toBeVisible();
    await filterColor.click();

    const filterColorBlack = page.locator('data[value="Negro"]');
    await expect(filterColorBlack).toBeVisible();
    await filterColorBlack.click();

    const clearFilter = page.locator('div[role="button"]:has-text("Borrar filtro")');
    await expect(clearFilter).toBeVisible();
    await clearFilter.click();

    await page.pause();
});