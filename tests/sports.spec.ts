import { test, expect } from '@playwright/test';

//DEPORTES
test('select-category-sports-menu', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Deportes' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    await page.pause();
});

test('select-category-sports:all-filters', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //2 Filtro: Sexo Unisex
    const filterSex = page.getByRole('button', { name: 'Sexo' });
    await filterSex.waitFor({ state: 'visible' });
    await filterSex.click();
    const sexUnisex = page.getByRole('button', { name: 'Mujer' });
    await sexUnisex.waitFor({ state: 'visible' });
    await sexUnisex.click();
    //3 Filtro: Categoria de producto
    const filterCategory = page.getByRole('button', { name: 'Categoría de producto' });
    await filterCategory.waitFor({ state: 'visible' });
    await filterCategory.click();
    const selectCategory = page.getByRole('button', { name: 'Ropa' });
    await selectCategory.waitFor({ state: 'visible' });
    await selectCategory.click();
    //3 Filtro: Color
    const filterColor = page.getByRole('button', { name: 'Color', exact: true });
    await filterColor.waitFor({ state: 'visible' });
    await filterColor.click();
    const selectColor = page.locator('article').filter({ hasText: 'Color' }).getByRole('button').nth(1)
    await selectColor.waitFor({ state: 'visible' });
    await selectColor.click();
    await page.waitForTimeout(1000);
    //4 Filtro: Talla
    const filterSize = page.getByRole('button', { name: 'Talla', exact: true });
    await filterSize.waitFor({ state: 'visible' });
    await filterSize.click();
    const selectSize1 = page.getByRole('button', { name: 'M', exact: true });
    await selectSize1.waitFor({ state: 'visible' });
    await selectSize1.click();
    await filterSize.click();
    //5 Filtro: Precio
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
    await page.pause();
});

test('select-category-sports:remove-filters', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    // await page.pause();
    //2 Filtro: Sexo Unisex
    const filterSex = page.getByRole('button', { name: 'Sexo' });
    await filterSex.waitFor({ state: 'visible' });
    await filterSex.click();
    const sexUnisex = page.getByRole('button', { name: 'Mujer' });
    await sexUnisex.waitFor({ state: 'visible' });
    await sexUnisex.click();
    // await page.pause();
    //3 Filtro: Categoria de producto
    const filterCategory = page.getByRole('button', { name: 'Categoría de producto' });
    await filterCategory.waitFor({ state: 'visible' });
    await filterCategory.click();
    const selectCategory = page.getByRole('button', { name: 'Ropa' });
    await selectCategory.waitFor({ state: 'visible' });
    await selectCategory.click();
    // await page.pause();
    //3 Filtro: Color
    const filterColor = page.getByRole('button', { name: 'Color', exact: true });
    await filterColor.waitFor({ state: 'visible' });
    await filterColor.click();
    const selectColor = page.locator('article').filter({ hasText: 'Color' }).getByRole('button').nth(1)
    await selectColor.waitFor({ state: 'visible' });
    await selectColor.click();
    await page.waitForTimeout(1000);
    // await page.pause();
    //4 Filtro: Talla
    const filterSize = page.getByRole('button', { name: 'Talla', exact: true });
    await filterSize.waitFor({ state: 'visible' });
    await filterSize.click();
    const selectSize1 = page.getByRole('button', { name: 'M', exact: true });
    await selectSize1.waitFor({ state: 'visible' });
    await selectSize1.click();
    await filterSize.click();
    // await page.pause();
    //5 Filtro: Precio
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
    // await page.pause();
    //6 Filtro: Edad
    const filterAge = page.getByRole('button', { name: 'Edad', exact: true });
    await filterAge.waitFor({ state: 'visible' });
    await filterAge.click();
    const selectAge = page.getByRole('button', { name: 'Adultos', exact: true });
    await selectAge.waitFor({ state: 'visible' });
    await selectAge.click();
    //7 Borrar filtros
    const deleteFilter = page.getByRole('button', { name: 'Borrar filtro' });
    await deleteFilter.waitFor({ state: 'visible' });
    await deleteFilter.click();
    await page.pause();
});

test('select-category-sports:sort-age-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
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

test('select-category-sports:sort-age-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //Ordenar: Age: Descendente
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option = page.locator('li.FieldSelect-Option span', { hasText: 'Age: Descendente' });
    await option.waitFor({ state: 'visible' });
    await option.click();
    await page.waitForTimeout(1000);
    await page.pause();
});

test('select-category-sports:sort-art-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //Ordenar: Age: Ascendente
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option2 = page.locator('li.FieldSelect-Option span', { hasText: 'Article: Ascendente' });
    await option2.waitFor({ state: 'visible' });
    await option2.click();
    await page.waitForTimeout(1000);
    await page.pause();
});

test('select-category-sports:sort-art-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //Ordenar: Age: Descendente
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option2 = page.locator('li.FieldSelect-Option span', { hasText: 'Article: Descendente' });
    await option2.waitFor({ state: 'visible' });
    await option2.click();
    await page.waitForTimeout(1000);
    await page.pause();
});

test('select-category-sports:sort-date-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //Ordenar: Date: Ascendente
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option2 = page.locator('li.FieldSelect-Option span', { hasText: 'Date: Ascendente' });
    await option2.waitFor({ state: 'visible' });
    await option2.click();
    await page.waitForTimeout(1000);
    await page.pause();
});

test('select-category-sports:sort-date-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //Ordenar: Date: Descendente
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option2 = page.locator('li.FieldSelect-Option span', { hasText: 'Date: Descendente' });
    await option2.waitFor({ state: 'visible' });
    await option2.click();
    await page.waitForTimeout(1000);
    await page.pause();
});

test('select-category-sports:sort-name-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //Ordenar: Nombre del producto: asc
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option2 = page.locator('li.FieldSelect-Option span', { hasText: 'Nombre del producto: asc' });
    await option2.waitFor({ state: 'visible' });
    await option2.click();
    await page.waitForTimeout(1000);
    await page.pause();
});

test('select-category-sports:sort-name-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //Ordenar: Nombre del producto: desc
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option2 = page.locator('li.FieldSelect-Option span', { hasText: 'Nombre del producto: desc' });
    await option2.waitFor({ state: 'visible' });
    await option2.click();
    await page.waitForTimeout(1000);
    await page.pause();
});

test('select-category-sports:sort-default', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //Ordenar: Orden predeterminado
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option2 = page.locator('li.FieldSelect-Option span', { hasText: 'Orden predeterminado' });
    await option2.waitFor({ state: 'visible' });
    await option2.click();
    await page.waitForTimeout(1000);
    await page.pause();
});

test('select-category-sports:sort-price-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //Ordenar: Rango de precios: asc
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option2 = page.locator('li.FieldSelect-Option span', { hasText: 'Rango de precios: asc' });
    await option2.waitFor({ state: 'visible' });
    await option2.click();
    await page.waitForTimeout(1000);
    await page.pause();
});

test('select-category-sports:sort-price-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //Ordenar: Rango de precio: desc
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option2 = page.locator('li.FieldSelect-Option span', { hasText: 'Rango de precio: desc' });
    await option2.waitFor({ state: 'visible' });
    await option2.click();
    await page.waitForTimeout(1000);
    await page.pause();
});

test('select-category-sports:select-product', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Deportes' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    // Seleccionar primer producto
    const selectProduct = page.getByRole('link', { name: 'Draggable area Sudadera' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

//Motorsport
test('select-category-sports-motorsport-ferrari', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Motorsport' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectFilterFerrari = page.getByRole('button', { name: 'Ferrari' });
    await selectFilterFerrari.waitFor({ state: 'visible' });
    await selectFilterFerrari.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Ferrari");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis Scuderia' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-motorsport-mercedes', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Motorsport' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Mercedes AMG Petronas' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("PUMA Mercedes AMG Petronas");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Pants hombre' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-motorsport-porsche', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Motorsport' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Porsche' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Porsche");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Sudadera' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-motorsport-for-women', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Motorsport' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('link', { name: 'Para Mujeres' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Motorsport");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Camiseta' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-motorsport-formula1', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Motorsport' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Fórmula 1' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fórmula 1");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Pants hombre' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-motorsport-neon', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Motorsport' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Neon Energy' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Neon Energy");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Pants hombre' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-motorsport-bmw', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Motorsport' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'BMW' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("PUMA BMW Motorsport");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Playera Hombre' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-motorsport-gp', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Motorsport' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'GP México' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("GP MEXICO");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Sudadera F1' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

//SOCCER
test('select-category-sports-soccer-jerseys', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Jerseys' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Jerseys de Fútbol");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Jersey Chivas' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-mancity', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Manchester City' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("PUMA Y MANCHESTER CITY");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Mochila' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-acmilan', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'AC Milan' });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("PUMA x AC MILAN");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Jersey local r' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-chivas', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Chivas', exact: true });
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Colección PUMA Chivas");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Jersey Hombre' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-rayados', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Rayados Monterrey'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Ropa y uniformes oficiales de Rayados de Monterrey");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Sudadera' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-neymar', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Neymar Jr'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Neymar Jr");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Chamarra' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-clubes', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Clubes internacionales'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Clubes internacionales");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Replica de la' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-tenis', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Tenis de Fútbol'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("TENIS PUMA PARA FÚTBOL");
    const selectProduct = page.getByRole('link', { name: 'Tacos de futbol ATTACANTO IT' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-chivas-esports', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Chivas Esports'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Chivas Esports");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Jersey' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-borussia', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Borussia Dortmund'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("PUMA BORUSSIA DORTMUND");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Réplica de la' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-future', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Future'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("TACOS DE FUTBOL PUMA FUTURE");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tacos de fútbol FUTURE 7 MATCH TT Product price: 1399.30Mex$' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-ultra', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Ultra'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("ULTRA");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tacos de fútbol niños ULTRA 5 PLAY TT Product price: 839.30Mex$' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-king', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'King'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("PUMA KING");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tacos de futbol Adolescente KING MATCH FG/AG Product price: 1049' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-marsella', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Olympique de Marsella'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Olympique de Marsella");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Jersey Hombre visitante Olympique de Marseille 24/25 Product' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-eclipse', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Eclipse'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Eclipse Pack");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tacos de fútbol FUTURE 7 ULTIMATE FG/AG Product price: 3149' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-psv', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'PSV Eindhoven'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("PSV");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Jersey Hombre' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-valencia', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Valencia'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Valencia");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Jersey Hombre' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-gala', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Galatasaray SK'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Galatasaray SK");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Jersey visitante Hombre Galatasaray SK 24/25 Product price: 899' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-soccer-team', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Fútbol' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Teamsport pack'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("TEAMSPORT PACK");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Maillot para' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

//RUNNING
test('select-category-sports-running-all', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Running' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Ver Todo Running'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Running");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Playera RUN' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-running-road', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Running' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Road Running'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Road Running");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Zapatillas de' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-running-sende', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Running' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Senderismo/Hiking'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Tenis para senderismo");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis de senderismo Hombre Explore NITRO™ 2 Product price: 1349.' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-running-race', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Running' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Raceday-Maratones'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Raceday");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis de running Mujer Magnify NITRO™ 2 Product price: 1549.' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-running-soft', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Running' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Soft Shoes'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Running Performance");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis para correr para mujer Better Foam Legacy Product price:' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-running-ropa', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Running' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Ropa de Running'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Ropa de Running");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Playera RUN' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-running-acce', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Running' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Accesorios de Running'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Accesorios para Running");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Cinturón de' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

//TRAINING
test('select-category-sports-training-studio', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Training' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Studio'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Studio");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Mallas de' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-training-fit', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Training' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Puma Fit'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Puma Fit");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis de' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-training-hyper', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Training' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Hypernatural'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Hypernatural");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Top' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-training-shape', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Training' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Shapeluxe'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Shapeluxe");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Sport Bra' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-training-cloud', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Training' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Cloudspun'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cloudspun");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis de entrenamiento para mujer PWRFrame TR 3 Product price:' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-training-inter', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Training' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Intergalactic'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Intergalactic");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Bolso Tote ESS' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

//OTROS
test('select-category-sports-other-padel', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Otros' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('link', { name: 'Padel'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    const clickPadel = page.getByRole('link', { name: 'COMPRAR'});
    await clickPadel.waitFor({ state: 'visible' });
    await clickPadel.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("ACCESORIOS, ROPA Y CALZADO PARA PÁDEL PUMA");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Mochila de pá' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-other-esports', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Otros' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Esports'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("E-Sports");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Sudadera Free' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-sports-other-basquet', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Deportes' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Deportes/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Deportes");
    //1 Más filtros
    const clickMoreFilters = page.getByRole('button', { name: '+ Más filtros' });
    await clickMoreFilters.waitFor({ state: 'visible' });
    await clickMoreFilters.click();
    const selectFilter = page.getByRole('button', { name: 'Otros' });
    await selectFilter.waitFor({ state: 'visible' });
    await selectFilter.click();
    const selectSubFilter = page.getByRole('button', { name: 'Todo Basquetbol'});
    await selectSubFilter.waitFor({ state: 'visible' });
    await selectSubFilter.click();
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("PUMA Basketball");
    const selectProduct = page.getByRole('link', { name: 'Draggable area Sudadera de bá' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});