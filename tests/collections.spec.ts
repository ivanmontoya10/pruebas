import { test, expect } from '@playwright/test';

test('select-category-collections-menu', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    await page.pause();
});

test('select-category-collections:all-filters', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //Filtro: Sexo Unisex
    const filterSex = page.getByRole('button', { name: 'Sexo' });
    await filterSex.waitFor({ state: 'visible' });
    await filterSex.click();
    const sexUnisex = page.getByRole('button', { name: 'Hombre' });
    await sexUnisex.waitFor({ state: 'visible' });
    await sexUnisex.click();
    //Filtro: Categoria de producto
    const filterCategory = page.getByRole('button', { name: 'Categoría de producto' });
    await filterCategory.waitFor({ state: 'visible' });
    await filterCategory.click();
    const selectCategory = page.getByRole('button', { name: 'Ropa' });
    await selectCategory.waitFor({ state: 'visible' });
    await selectCategory.click();
    //Filtro: Color
    const filterColor = page.getByRole('button', { name: 'Color', exact: true });
    await filterColor.waitFor({ state: 'visible' });
    await filterColor.click();
    const selectColor = page.locator('article').filter({ hasText: 'Color' }).getByRole('button').nth(1)
    await selectColor.waitFor({ state: 'visible' });
    await selectColor.click();
    await page.waitForTimeout(1000);
    //Filtro: Talla
    const filterSize = page.getByRole('button', { name: 'Talla', exact: true });
    await filterSize.waitFor({ state: 'visible' });
    await filterSize.click();
    const selectSize1 = page.getByRole('button', { name: 'M', exact: true });
    await selectSize1.waitFor({ state: 'visible' });
    await selectSize1.click();
    await filterSize.click();
    //Filtro: Precio
    const filterPrice = page.getByRole('button', { name: 'Precio', exact: true });
    await filterPrice.waitFor({ state: 'visible' });
    await filterPrice.click();
    const selectPrice1 = page.locator('input[id="price-min"]');;
    await selectPrice1.waitFor({ state: 'visible' });
    await selectPrice1.fill('');
    await selectPrice1.fill('430');
    await filterPrice.click();
    await filterPrice.waitFor({ state: 'visible' });
    await filterPrice.click();
    const selectPrice2 = page.locator('input[id="price-max"]');
    await selectPrice2.waitFor({ state: 'visible' });
    await selectPrice2.fill('');
    await selectPrice2.fill('700');
    await filterPrice.click();
    await page.waitForTimeout(1000);
    //Filtro: Edad
    const filterAge = page.getByRole('button', { name: 'Edad', exact: true });
    await filterAge.waitFor({ state: 'visible' });
    await filterAge.click();
    const selectAge = page.getByRole('button', { name: 'Adultos', exact: true });
    await selectAge.waitFor({ state: 'visible' });
    await selectAge.click();
    await page.pause();
});

test('select-category-collections:remove-filters', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //Filtro: Sexo Unisex
    const filterSex = page.getByRole('button', { name: 'Sexo' });
    await filterSex.waitFor({ state: 'visible' });
    await filterSex.click();
    const sexUnisex = page.getByRole('button', { name: 'Hombre' });
    await sexUnisex.waitFor({ state: 'visible' });
    await sexUnisex.click();
    //Filtro: Categoria de producto
    const filterCategory = page.getByRole('button', { name: 'Categoría de producto' });
    await filterCategory.waitFor({ state: 'visible' });
    await filterCategory.click();
    const selectCategory = page.getByRole('button', { name: 'Ropa' });
    await selectCategory.waitFor({ state: 'visible' });
    await selectCategory.click();
    //Filtro: Color
    const filterColor = page.getByRole('button', { name: 'Color', exact: true });
    await filterColor.waitFor({ state: 'visible' });
    await filterColor.click();
    const selectColor = page.locator('article').filter({ hasText: 'Color' }).getByRole('button').nth(1)
    await selectColor.waitFor({ state: 'visible' });
    await selectColor.click();
    await page.waitForTimeout(1000);
    //Filtro: Talla
    const filterSize = page.getByRole('button', { name: 'Talla', exact: true });
    await filterSize.waitFor({ state: 'visible' });
    await filterSize.click();
    const selectSize1 = page.getByRole('button', { name: 'M', exact: true });
    await selectSize1.waitFor({ state: 'visible' });
    await selectSize1.click();
    await filterSize.click();
    //Filtro: Precio
    const filterPrice = page.getByRole('button', { name: 'Precio', exact: true });
    await filterPrice.waitFor({ state: 'visible' });
    await filterPrice.click();
    const selectPrice1 = page.locator('input[id="price-min"]');;
    await selectPrice1.waitFor({ state: 'visible' });
    await selectPrice1.fill('');
    await selectPrice1.fill('430');
    await filterPrice.click();
    await filterPrice.waitFor({ state: 'visible' });
    await filterPrice.click();
    const selectPrice2 = page.locator('input[id="price-max"]');
    await selectPrice2.waitFor({ state: 'visible' });
    await selectPrice2.fill('');
    await selectPrice2.fill('700');
    await filterPrice.click();
    await page.waitForTimeout(1000);
    //Filtro: Edad
    const filterAge = page.getByRole('button', { name: 'Edad', exact: true });
    await filterAge.waitFor({ state: 'visible' });
    await filterAge.click();
    const selectAge = page.getByRole('button', { name: 'Adultos', exact: true });
    await selectAge.waitFor({ state: 'visible' });
    await selectAge.click();
    //Eliminar filtros
    const deleteFilter = page.getByRole('button', { name: 'Borrar filtro' });
    await deleteFilter.waitFor({ state: 'visible' });
    await deleteFilter.click();
    await page.pause();
});

test('select-category-collections:sort-age-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Colecciones' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //Ordenar: Age: Ascendente
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option = page.locator('li.FieldSelect-Option span', { hasText: 'Age: Ascendente' });
    await option.waitFor({ state: 'visible' });
    await option.click();
    await page.waitForTimeout(1000);
    await page.pause();
});

test('select-category-collections:sort-age-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Colecciones' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    // Ordenar: Age: Descendente
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option1 = page.locator('li.FieldSelect-Option span', { hasText: 'Age: Descendente' });
    await option1.waitFor({ state: 'visible' });
    await option1.click();
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    await sort.click();
    await page.pause();
});

test('select-category-collections:sort-art-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Colecciones' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    // Ordenar: Article: Ascendente
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option1 = page.locator('li.FieldSelect-Option span', { hasText: 'Article: Ascendente' });
    await option1.waitFor({ state: 'visible' });
    await option1.click();
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    await sort.click();
    await page.pause();
});

test('select-category-collections:sort-art-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Colecciones' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    // Ordenar: Article: Ascendente
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option1 = page.locator('li.FieldSelect-Option span', { hasText: 'Article: Descendente' });
    await option1.waitFor({ state: 'visible' });
    await option1.click();
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    await sort.click();
    await page.pause();
});

test('select-category-collections:sort-date-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Colecciones' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    // Ordenar: Date: Ascendente
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option1 = page.locator('li.FieldSelect-Option span', { hasText: 'Date: Ascendente' });
    await option1.waitFor({ state: 'visible' });
    await option1.click();
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    await sort.click();
    await page.pause();
});

test('select-category-collections:sort-date-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Colecciones' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    // Ordenar: Date: Descendente
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option1 = page.locator('li.FieldSelect-Option span', { hasText: 'Date: Descendente' });
    await option1.waitFor({ state: 'visible' });
    await option1.click();
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    await sort.click();
    await page.pause();
});

test('select-category-collections:sort-name-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Colecciones' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    // Ordenar: Nombre del producto: asc
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option1 = page.locator('li.FieldSelect-Option span', { hasText: 'Nombre del producto: asc' });
    await option1.waitFor({ state: 'visible' });
    await option1.click();
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    await sort.click();
    await page.pause();
});

test('select-category-collections:sort-name-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Colecciones' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    // Ordenar: Nombre del producto: desc
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option1 = page.locator('li.FieldSelect-Option span', { hasText: 'Nombre del producto: desc' });
    await option1.waitFor({ state: 'visible' });
    await option1.click();
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    await sort.click();
    await page.pause();
});

test('select-category-collections:sort-default', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Colecciones' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    // Ordenar: Orden predeterminado
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option1 = page.locator('li.FieldSelect-Option span', { hasText: 'Orden predeterminado' });
    await option1.waitFor({ state: 'visible' });
    await option1.click();
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    await sort.click();
    await page.pause();
});

test('select-category-collections:sort-range-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Colecciones' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    // Ordenar: Rango de precio: asc
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option1 = page.locator('li.FieldSelect-Option span', { hasText: 'Rango de precios: asc' });
    await option1.waitFor({ state: 'visible' });
    await option1.click();
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    await sort.click();
    await page.pause();
});

test('select-category-collections:sort-range-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Colecciones' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    // Ordenar: Rango de precio: desc
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option1 = page.locator('li.FieldSelect-Option span', { hasText: 'Rango de precio: desc' });
    await option1.waitFor({ state: 'visible' });
    await option1.click();
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    await sort.click();
    await page.pause();
});

test('select-category-collections:select-product', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Colecciones' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    // Seleccionar primer producto
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis Speedcat' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

//LIFESTYLE
test('select-category-collections-lifestyle-capro', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Ca Pro' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cali");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis Cali' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-lifestyle-mayze', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Mayze' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("SNEAKERS PUMA MAYZE");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis Mujer' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-lifestyle-suede', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Suede' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("PUMA SUEDE");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis Suede Classic Product price: 1399.30Mex$' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-lifestyle-caven', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Caven Dime' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("TENIS PUMA CAVEN DIME");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis Scuderia' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-lifestyle-rsx', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'RS-X' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("TENIS PUMA RS-X");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis PUMA x' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-lifestyle-velo', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Velophasis' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Velophasis");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis Velophasis Untergrund Product price: 1499.50Mex$' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-lifestyle-seasons', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Puma Seasons' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Seasons");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Cinturón de' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-lifestyle-clyde', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Clyde' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Clyde");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tensi Clyde' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-lifestyle-palermo', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Palermo' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("TENIS PALERMO PUMA");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis Palermo Moda Elevated para mujer Product price: 1049.50Mex$' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-lifestyle-house', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'House of Graphics' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("House of Graphics");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Playera para' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-lifestyle-180', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Puma-180' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("TENIS PUMA 180");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis PLAY' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-lifestyle-easy', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Easy Rider' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("PUMA EASY RIDER");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis PUMA x' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-lifestyle-lane', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'The Players Lane' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("The Players Lane");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Chamarra' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-lifestyle-speedcat', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Speedcat' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Speedcat");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis Speedcat' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-lifestyle-roma', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Lifestyle' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Roma' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Roma");
    const selectProduct = page.locator('.ProductCard-Link').first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

//TRENDING
test('select-category-collections-trending-online', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Trending' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Exclusivos Online' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Exclusivos Online");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Sandalias' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-trending-basic', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Trending' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Básicos' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Basics");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Playera Hombre' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-trending-best', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Trending' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Best Sellers' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Best sellers");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tacos de fú' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-trending-last', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Trending' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Últimas Piezas' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Last Units");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis RBD Game' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-trending-white', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Trending' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Tenis Blancos' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Tenis PUMA Blancos");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis PUMA' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-trending-otoño', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Trending' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Otoño Puma' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Otoño Puma");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Sudadera Hombre Classics MX Nopal Hoodie Product price: 1189.' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-trending-botas', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Trending' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Botas Puma' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("BOTAS PUMA");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Botas Desierto' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-trending-mexican', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Trending' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: "Tee\'s Mexican Collection" });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Mexican Collection");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Playera Mujer' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-trending-black', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Trending' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Tenis Negros' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Tenis Negros");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Sandalias' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

//Colaborations
test('select-category-collections-colaborations-lamelo', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'LaMelo' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Tenis PUMA LaMelo Ball");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis de básquetbol MB.04 Iridescent Hornets Product price: 3299' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-palomo', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Palomo' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Palomo");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis Palermo' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-stewie', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Stewie' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Stewie");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Shorts de' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-yona', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Yona' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Yona");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Playera YONA' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-trolls', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Trolls' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Puma x Trolls");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Camiseta grá' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-sophia', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Sophia Chang' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Sophia Chang");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Chamarra' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-play', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Playstation' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Playstation");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Playera' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-rocky', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'A$AP ROCKY' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("A$AP ROCKY");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Chamarra de' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-fenty', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Fenty x Puma' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis FENTY x' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-carrots', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Puma x Carrots' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Carrots");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Suéter PUMA x' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-lafrance', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'LAFRANCÉ' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("LAFRANCÉ");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Playera PUMA' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-fresh-water-lemon', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('link', { name: 'Aguas Frescas' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    const selectWater = page.locator("#full_bleed_hero_3385").getByRole('link', { name: 'COMPRAR' });
    await selectWater.waitFor({ state: 'visible' });
    await selectWater.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Limón");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Playera YONA' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-fresh-water-jamaica', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('link', { name: 'Aguas Frescas' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    const selectWater = page.locator("#full_bleed_hero_3386").getByRole('link', { name: 'COMPRAR' });
    await selectWater.waitFor({ state: 'visible' });
    await selectWater.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Jamaica");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Conjunto' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-fresh-water-horchata', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('link', { name: 'Aguas Frescas' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    const selectWater = page.locator("#full_bleed_hero_3387").getByRole('link', { name: 'COMPRAR' });
    await selectWater.waitFor({ state: 'visible' });
    await selectWater.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Horchata");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Playera' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-fresh-water-tamarindo', async ({ page }) => {   
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('link', { name: 'Aguas Frescas' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    const selectWater = page.locator("#full_bleed_hero_3388").getByRole('link', { name: 'COMPRAR' });
    await selectWater.waitFor({ state: 'visible' });
    await selectWater.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Tamarindo");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Chamarra MMQ' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-kidsuper', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Kidsuper' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Kidsuper");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis PUMA x' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-rleague', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Rocket League' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Rocket League");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis de' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-harry', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Harry Potter' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Harry Potter");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Camiseta para' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-dia-de-muertos', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Día de muertos' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Día de Muertos");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Playera' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-collections-colaborations-lmc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Colecciones' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    await expect(page).toHaveTitle(/colecciones | Puma México/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colecciones");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Colaboraciones' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'LMC' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("LMC");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Gorra PUMA x' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});