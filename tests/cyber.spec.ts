import { test, expect } from '@playwright/test';

test('select-category-cyber-menu', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Cyber Days' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
    await page.pause();
});

test('select-category-cyber:all-filters', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Cyber Days' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
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
    //2 Filtro: Sexo Unisex
    const filterSex = page.getByRole('button', { name: 'Sexo' });
    await filterSex.waitFor({ state: 'visible' });
    await filterSex.click();
    const sexUnisex = page.getByRole('button', { name: 'Mujer' });
    await sexUnisex.waitFor({ state: 'visible' });
    await sexUnisex.click();
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
    // await filterSize.click();
    await page.waitForTimeout(1000);
    await page.pause();
});

test('select-category-cyber:sort-age-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Cyber Days' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
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

test('select-category-cyber:sort-age-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Cyber Days' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
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

test('select-category-cyber:sort-art-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Cyber Days' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
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

test('select-category-cyber:sort-art-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Cyber Days' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
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

test('select-category-cyber:sort-date-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Cyber Days' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
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

test('select-category-cyber:sort-date-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Cyber Days' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
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

test('select-category-cyber:sort-name-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Cyber Days' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
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

test('select-category-cyber:sort-name-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Cyber Days' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
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

test('select-category-cyber:sort-default', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Cyber Days' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
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

test('select-category-cyber:sort-price-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Cyber Days' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
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

test('select-category-cyber:sort-price-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCategory = page.getByRole('link', { name: 'Cyber Days' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click(); await clickCategory.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
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

test('select-category-cyber:select-product', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Cyber Days' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
    // Seleccionar primer producto
    const selectProduct = page.getByRole('link', { name: 'Draggable area Sudadera' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('select-category-cyber:category-running', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    const clickCredits = page.getByRole('link', { name: 'Cyber Days' });
    await clickCredits.waitFor({ state: 'visible' });
    await clickCredits.click();
    await expect(page).toHaveTitle(/Cyber Days/);
    await expect(page.locator("h1.CategoryDetails-Heading")).toContainText("Cyber Days");
    const clickCategory = page.getByRole('button', { name: 'Deporte' });
    await clickCategory.waitFor({ state: 'visible' });
    await clickCategory.click();
    const selectCategory = page.getByRole('button', { name: 'Running' }).first();
    await selectCategory.waitFor({ state: 'visible' });
    await selectCategory.click();
    // Seleccionar primer producto
    // await page.pause();
    const selectProduct = page.getByRole('link', { name: 'Draggable area Camiseta Run' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

