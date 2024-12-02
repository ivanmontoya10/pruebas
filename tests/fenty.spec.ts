import { test, expect } from '@playwright/test';

//FENTY
test('select-category-FENTY', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
});

test('select-category-FENTY:all-filters', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
    //2 Filtro: Sexo Unisex
    const filterSex = page.getByRole('button', { name: 'Sexo' });
    await filterSex.waitFor({ state: 'visible' });
    await filterSex.click();
    const sexUnisex = page.getByRole('button', { name: 'Unisex' });
    await sexUnisex.waitFor({ state: 'visible' });
    await sexUnisex.click();

    //3 Filtro: Categoria de producto
    const filterCategory = page.getByRole('button', { name: 'Categoría de producto' });
    await filterCategory.waitFor({ state: 'visible' });
    await filterCategory.click();
    const selectCategory = page.getByRole('button', { name: 'Calzado' });
    await selectCategory.waitFor({ state: 'visible' });
    await selectCategory.click();
    
    //3 Filtro: Color
    const filterColor = page.getByRole('button', { name: 'Color', exact: true });
    await filterColor.waitFor({ state: 'visible' });
    await filterColor.click();
    const selectColor = page.locator('article').filter({ hasText: 'Color' }).getByRole('button').nth(1)
    await selectColor.waitFor({ state: 'visible' });
    await selectColor.click();
    
    //4 Filtro: Cambio de color
    await page.waitForTimeout(1000);
    await filterColor.click();
    const reload = page.locator("button.ResetButton-Button");
    await reload.waitFor({ state: 'visible' });
    await reload.click();
    await filterColor.click();
    const changeColor = page.locator('article').filter({ hasText: 'Color' }).getByRole('button').nth(3)
    await changeColor.waitFor({ state: 'visible' });
    await changeColor.click();
    
    //5 Filtro: Talla
    const filterSize = page.getByRole('button', { name: 'Talla', exact: true });
    await filterSize.waitFor({ state: 'visible' });
    await filterSize.click();
    const selectSize1 = page.getByRole('button', { name: '27', exact: true });
    await selectSize1.waitFor({ state: 'visible' });
    await selectSize1.click();
    await filterSize.click();
    const selectSize2 = page.getByRole('button', { name: '24', exact: true });
    await selectSize2.waitFor({ state: 'visible' });
    await selectSize2.click();
    
    //6 Filtro: Precio
    const filterPrice = page.getByRole('button', { name: 'Precio', exact: true });
    await filterPrice.waitFor({ state: 'visible' });
    await filterPrice.click();
    const selectPrice1 = page.locator('input[id="price-min"]');;
    await selectPrice1.waitFor({ state: 'visible' });
    await selectPrice1.fill('');
    await selectPrice1.fill('2500');
    await filterPrice.click();
    await filterPrice.waitFor({ state: 'visible' });
    await filterPrice.click();
    const selectPrice2 = page.locator('input[id="price-max"]');
    await selectPrice2.waitFor({ state: 'visible' });
    await selectPrice2.fill('');
    await selectPrice2.fill('2700');
    await filterPrice.click();
    await page.pause();
});

test('select-category-FENTY:remove-filters', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
    
    //2 Filtro: Sexo Unisex
    const filterSex = page.getByRole('button', { name: 'Sexo' });
    await filterSex.waitFor({ state: 'visible' });
    await filterSex.click();
    const sexUnisex = page.getByRole('button', { name: 'Unisex' });
    await sexUnisex.waitFor({ state: 'visible' });
    await sexUnisex.click();
    
    //3 Filtro: Categoria de producto
    const filterCategory = page.getByRole('button', { name: 'Categoría de producto' });
    await filterCategory.waitFor({ state: 'visible' });
    await filterCategory.click();
    const selectCategory = page.getByRole('button', { name: 'Calzado' });
    await selectCategory.waitFor({ state: 'visible' });
    await selectCategory.click();
    
    //3 Filtro: Color
    const filterColor = page.getByRole('button', { name: 'Color', exact: true });
    await filterColor.waitFor({ state: 'visible' });
    await filterColor.click();
    const selectColor = page.locator('article').filter({ hasText: 'Color' }).getByRole('button').nth(1)
    await selectColor.waitFor({ state: 'visible' });
    await selectColor.click();
    
    //4 Filtro: Cambio de color
    await page.waitForTimeout(1000);
    await filterColor.click();
    const reload = page.locator("button.ResetButton-Button");
    await reload.waitFor({ state: 'visible' });
    await reload.click();
    await filterColor.click();
    const changeColor = page.locator('article').filter({ hasText: 'Color' }).getByRole('button').nth(3)
    await changeColor.waitFor({ state: 'visible' });
    await changeColor.click();
    
    //5 Filtro: Talla
    const filterSize = page.getByRole('button', { name: 'Talla', exact: true });
    await filterSize.waitFor({ state: 'visible' });
    await filterSize.click();
    const selectSize1 = page.getByRole('button', { name: '27', exact: true });
    await selectSize1.waitFor({ state: 'visible' });
    await selectSize1.click();
    await filterSize.click();
    const selectSize2 = page.getByRole('button', { name: '24', exact: true });
    await selectSize2.waitFor({ state: 'visible' });
    await selectSize2.click();
    
    //6 Filtro: Precio
    const filterPrice = page.getByRole('button', { name: 'Precio', exact: true });
    await filterPrice.waitFor({ state: 'visible' });
    await filterPrice.click();
    const selectPrice1 = page.locator('input[id="price-min"]');;
    await selectPrice1.waitFor({ state: 'visible' });
    await selectPrice1.fill('');
    await selectPrice1.fill('2500');
    await filterPrice.click();
    await filterPrice.waitFor({ state: 'visible' });
    await filterPrice.click();
    const selectPrice2 = page.locator('input[id="price-max"]');
    await selectPrice2.waitFor({ state: 'visible' });
    await selectPrice2.fill('');
    await selectPrice2.fill('2700');
    await filterPrice.click();
    // Borrar filtros
    const deleteFilter = page.getByRole('button', { name: 'Borrar filtro' });
    await deleteFilter.waitFor({ state: 'visible' });
    await deleteFilter.click();
    await page.pause();
});



test('select-category-FENTY:sort-age-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
    //Ordenar: Age: Ascendente
    const sort = page.getByLabel('Select drop-down');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option = page.locator('li.FieldSelect-Option span', { hasText: 'Age: Ascendente' });
    await option.waitFor({ state: 'visible' });
    await option.click();
    await page.waitForTimeout(1000);
});

test('select-category-FENTY:sort-age-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
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

test('select-category-FENTY:sort-art-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
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

test('select-category-FENTY:sort-art-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
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

test('select-category-FENTY:sort-date-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
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

test('select-category-FENTY:sort-date-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
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

test('select-category-FENTY:sort-name-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
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

test('select-category-FENTY:sort-name-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
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

test('select-category-FENTY:sort-default', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
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

test('select-category-FENTY:sort-range-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
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

test('select-category-FENTY:sort-range-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
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

test('select-category-FENTY:select-product', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Fenty X Puma' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Fenty x PUMA/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Fenty x PUMA");
    // Seleccionar primer producto
    const selectProduct = page.getByRole('link', { name: 'Draggable area Tenis FENTY x' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});