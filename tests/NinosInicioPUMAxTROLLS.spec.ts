import { test, expect, chromium } from '@playwright/test';

test('Categoria-Kids', async ({ page }) => {

    await page.goto('https://mx.puma.com/');

    const clickCredits = page.getByRole('link', { name: 'Niños' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();

    await expect(page).toHaveURL('https://mx.puma.com/minicats');

    await page.pause();
});

test('select-PumaXTrolls-Kids', async ({ page }) => {

    await page.goto('https://mx.puma.com/minicats');

    const buyButton = page.locator('a:has-text("COMPRAR")').first();
    await expect(buyButton).toBeVisible();
    await buyButton.click();

    await expect(page).toHaveURL('https://mx.puma.com/colecciones/select/puma-x-trolls.html');

    await page.pause();
});

test('select-product-PumaXTrolls-kids', async ({ page }) => {
    await page.goto('https://mx.puma.com/colecciones/select/puma-x-trolls.html');

    const firstAllProducts = page.locator('.ProductList .ProductListPage .ProductCard a').first();
    await expect(firstAllProducts).toBeVisible();
    await firstAllProducts.click();

    await page.waitForSelector('h1.ProductActions-Title');

    const productTitle = page.locator('h1.ProductActions-Title');
    await expect(productTitle).toHaveText('Camiseta gráfica manga corta para niños PUMA x TROLLS');

    const productPrice = page.locator('span[itemprop="price"]');
    await expect(productPrice).toHaveText('299.50');

    const productColor = page.locator('.ProductConfigurableAttributes-ColorSubLabelValue');
    await expect(productColor).toHaveText('Creamy Vanilla');

    await page.pause();
});

test('select-TallaCantidadKids', async ({ page }) => {
    await page.goto('https://mx.puma.com/colecciones/select/puma-x-trolls.html');

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


test('select-colorLink-Kids', async ({ page }) => {
    await page.goto('https://mx.puma.com/colecciones/select/puma-x-trolls.html');

    const firstAllProducts = page.locator('.ProductList .ProductListPage .ProductCard a').first();
    await expect(firstAllProducts).toBeVisible();
    await firstAllProducts.click();

    const selectLinkColor = page.locator('button[class="ProductAttributeValue "]').first();
    await expect(selectLinkColor).toBeVisible();
    await selectLinkColor.click();

    await page.pause();

});

// test('moreProducts-button-Kids', async ({ page }) => {

//     await page.goto('https://mx.puma.com/hombres.html');

//     const buttonMoreProd = page.locator('[class="ProductList-LoadProductsButton ProductList-LoadProductsButton_type_loadMore"]')
//     await expect(buttonMoreProd).toBeVisible();
//     await buttonMoreProd.click();
//     await page.pause();
// });

// test('showAll-button-Kids', async ({ page }) => {

//     await page.goto('https://mx.puma.com/hombres.html');

//     const buttonShowAll = page.locator('button[class="ProductList-LoadProductsButton ProductList-LoadProductsButton_type_loadAll Button-AddToCart"]')
//     await expect(buttonShowAll).toBeVisible();
//     await buttonShowAll.click();
//     await page.pause();
// });

test('KidsAddFilters', async ({ page }) => {
    await page.goto('https://mx.puma.com/colecciones/select/puma-x-trolls.html');

    const filterSex = page.locator('button:has(span:has-text("Sexo"))');
    await expect(filterSex).toBeVisible();
    await filterSex.click();

    const filterSexMujer = page.locator('label[for="Mujer"]');
    await expect(filterSexMujer).toBeVisible();
    await filterSexMujer.click();

    const filterSize = page.locator('button:has(span:has-text("Talla"))');
    await expect(filterSize).toBeVisible();
    await filterSize.click();

    const filterSizeM = page.locator('span[title="XXS"]');
    await expect(filterSizeM).toBeVisible();
    await filterSizeM.click();

    const filterCategory = page.locator('button:has(span:has-text("Categoría de producto"))');
    await expect(filterCategory).toBeVisible();
    await filterCategory.click();

    const filterCalzado = page.locator('label[for="Ropa"]');
    await expect(filterCalzado).toBeVisible();
    await filterCalzado.click();

    await page.pause();
});

test('KidsDeleteOneFilter', async ({ page }) => {
    await page.goto('https://mx.puma.com/colecciones/select/puma-x-trolls.html');

    const filterSex = page.locator('button:has(span:has-text("Sexo"))');
    await expect(filterSex).toBeVisible();
    await filterSex.click();

    const filterSexMujer = page.locator('label[for="Mujer"]');
    await expect(filterSexMujer).toBeVisible();
    await filterSexMujer.click();

    const filterSize = page.locator('button:has(span:has-text("Talla"))');
    await expect(filterSize).toBeVisible();
    await filterSize.click();

    const filterSizeM = page.locator('span[title="XXS"]');
    await expect(filterSizeM).toBeVisible();
    await filterSizeM.click();

    const filterCategory = page.locator('button:has(span:has-text("Categoría de producto"))');
    await expect(filterCategory).toBeVisible();
    await filterCategory.click();

    const filterCalzado = page.locator('label[for="Ropa"]');
    await expect(filterCalzado).toBeVisible();
    await filterCalzado.click();

    const clearFilterMujer = page.locator('div[role="button"]:has-text("Categoría de producto: Ropa")');
    await expect(clearFilterMujer).toBeVisible();
    await clearFilterMujer.click();


    await page.pause();
});

test('KidsDeleteFilters', async ({ page }) => {
    await page.goto('https://mx.puma.com/colecciones/select/puma-x-trolls.html');

    const filterSex = page.locator('button:has(span:has-text("Sexo"))');
    await expect(filterSex).toBeVisible();
    await filterSex.click();

    const filterSexMujer = page.locator('label[for="Mujer"]');
    await expect(filterSexMujer).toBeVisible();
    await filterSexMujer.click();

    const filterSize = page.locator('button:has(span:has-text("Talla"))');
    await expect(filterSize).toBeVisible();
    await filterSize.click();

    const filterSizeM = page.locator('span[title="XXS"]');
    await expect(filterSizeM).toBeVisible();
    await filterSizeM.click();

    const filterCategory = page.locator('button:has(span:has-text("Categoría de producto"))');
    await expect(filterCategory).toBeVisible();
    await filterCategory.click();

    const filterCalzado = page.locator('label[for="Ropa"]');
    await expect(filterCalzado).toBeVisible();
    await filterCalzado.click();

    const clearFilter = page.locator('div[role="button"]:has-text("Borrar filtro")');
    await expect(clearFilter).toBeVisible();
    await clearFilter.click();

    await page.pause();
});