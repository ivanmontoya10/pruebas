import { test, expect } from '@playwright/test';

//BÚSQUEDA
test('search-product-option', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    await expect(clickSearch).toBeVisible();
    await page.waitForTimeout(1000);
    await clickSearch.fill("Harry Potter");
    await clickSearch.press('Enter');
    await expect(page.getByText("BUSCA POR Harry Potter").first()).toBeVisible();
    await page.pause();
});

test('search-product-2', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    await expect(clickSearch).toBeVisible();
    await page.waitForTimeout(1000);
    await clickSearch.fill("Chivas");
    await clickSearch.press('Enter');
    await expect(page.getByText("BUSCA POR Chivas").first()).toBeVisible();
    await page.pause();
});

test('search-product-3', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    await expect(clickSearch).toBeVisible();
    await page.waitForTimeout(1000);
    await clickSearch.fill("Ferrari");
    await clickSearch.press('Enter');
    await expect(page.getByText("BUSCA POR Ferrari").first()).toBeVisible();
    await page.pause();
});

test('search-product:all-filters', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    await expect(clickSearch).toBeVisible();
    await page.waitForTimeout(1000);
    await clickSearch.fill("Harry Potter");
    await clickSearch.press('Enter');
    await expect(page.getByText("BUSCA POR Harry Potter").first()).toBeVisible();
    //Filtro: Categoria de producto
    const filterCategory = page.getByRole('heading', { name: 'CATEGORÍA DE PRODUCTO' });
    await filterCategory.waitFor({ state: 'visible' });
    await filterCategory.click();
    await page.waitForTimeout(1000);
    const selectCategory = page.getByText('Ropa');
    await selectCategory.waitFor({ state: 'visible' });
    await selectCategory.click();
    await page.waitForTimeout(1000);
    //Filtro: Talla
    const filterSize = page.getByRole('heading', { name: 'TALLA' });
    await filterSize.waitFor({ state: 'visible' });
    await filterSize.click();
    await page.waitForTimeout(1000);
    const selectSize = page.locator('div').filter({hasText: /^M$/});
    await selectSize.waitFor({ state: 'visible' });
    await selectSize.click();
    //Filtro: Color
    const filterColor = page.getByRole('heading', { name: 'Color' });
    await filterColor.waitFor({ state: 'visible' });
    await filterColor.click();
    await page.waitForTimeout(1000);
    const selectColor = page.locator('label').filter({hasText: 'Negro'});
    await selectColor.waitFor({ state: 'visible' });
    await selectColor.click();
    await page.waitForTimeout(1000);
    //Filtro: Sexo
    const filterSex = page.getByRole('heading', { name: 'SEXO' });
    await filterSex.waitFor({ state: 'visible' });
    await filterSex.click();
    await page.waitForTimeout(1000);
    const selectSex = page.getByText('Mujer', {exact: true});
    await selectSex.waitFor({ state: 'visible' });
    await selectSex.click();
    await page.waitForTimeout(1000);
    await page.pause();
});

test('search-product:remove-filters', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    await expect(clickSearch).toBeVisible();
    await page.waitForTimeout(1000);
    await clickSearch.fill("Harry Potter");
    await clickSearch.press('Enter');
    await expect(page.getByText("BUSCA POR Harry Potter").first()).toBeVisible();
    //Filtro: Categoria de producto
    const filterCategory = page.getByRole('heading', { name: 'CATEGORÍA DE PRODUCTO' });
    await filterCategory.waitFor({ state: 'visible' });
    await filterCategory.click();
    await page.waitForTimeout(1000);
    const selectCategory = page.getByText('Ropa');
    await selectCategory.waitFor({ state: 'visible' });
    await selectCategory.click();
    await page.waitForTimeout(1000);
    //Filtro: Talla
    const filterSize = page.getByRole('heading', { name: 'TALLA' });
    await filterSize.waitFor({ state: 'visible' });
    await filterSize.click();
    await page.waitForTimeout(1000);
    const selectSize = page.locator('div').filter({hasText: /^M$/});
    await selectSize.waitFor({ state: 'visible' });
    await selectSize.click();
    //Filtro: Color
    const filterColor = page.getByRole('heading', { name: 'Color' });
    await filterColor.waitFor({ state: 'visible' });
    await filterColor.click();
    await page.waitForTimeout(1000);
    const selectColor = page.locator('label').filter({hasText: 'Negro'});
    await selectColor.waitFor({ state: 'visible' });
    await selectColor.click();
    await page.waitForTimeout(1000);
    //Filtro: Sexo
    const filterSex = page.getByRole('heading', { name: 'SEXO' });
    await filterSex.waitFor({ state: 'visible' });
    await filterSex.click();
    await page.waitForTimeout(1000);
    const selectSex = page.getByText('Mujer', {exact: true});
    await selectSex.waitFor({ state: 'visible' });
    await selectSex.click();
    await page.waitForTimeout(1000);
    //Restablecer filtros
    const deleteFilter = page.getByRole('button', { name: 'Restablecer' });
    await deleteFilter.waitFor({ state: 'visible' });
    await deleteFilter.click();
    await page.pause();
});

test('search-product:sort-name-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    await expect(clickSearch).toBeVisible();
    await page.waitForTimeout(1000);
    await clickSearch.fill("Harry Potter");
    await clickSearch.press('Enter');
    await expect(page.getByText("BUSCA POR Harry Potter").first()).toBeVisible();
    const sort = page.getByText('Más vendidos');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    //Ordenar: Nombre del producto: asc
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option1 = page.getByText('Nombre del producto: asc');
    await option1.waitFor({ state: 'visible' });
    await option1.click();
    await option1.click();
    await page.pause();
});

test('search-product:sort-name-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    await expect(clickSearch).toBeVisible();
    await page.waitForTimeout(1000);
    await clickSearch.fill("Harry Potter");
    await clickSearch.press('Enter');
    await expect(page.getByText("BUSCA POR Harry Potter").first()).toBeVisible();
    const sort = page.getByText('Más vendidos');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    //Ordenar: Nombre del producto: desc
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option2 = page.getByText('Nombre del producto: desc');
    await option2.waitFor({ state: 'visible' });
    await option2.click();
    await option2.click();
    await page.pause();
});

test('search-product:sort-price-asc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    await expect(clickSearch).toBeVisible();
    await page.waitForTimeout(1000);
    await clickSearch.fill("Harry Potter");
    await clickSearch.press('Enter');
    await expect(page.getByText("BUSCA POR Harry Potter").first()).toBeVisible();
    const sort = page.getByText('Más vendidos');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    //Ordenar: Rango de precios: asc
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option3 = page.getByText('RANGO DE PRECIOS: asc');
    await option3.waitFor({ state: 'visible' });
    await option3.click();
    await option3.click();
    await page.pause();
});

test('search-product:sort-price-desc', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    await expect(clickSearch).toBeVisible();
    await page.waitForTimeout(1000);
    await clickSearch.fill("Harry Potter");
    await clickSearch.press('Enter');
    await expect(page.getByText("BUSCA POR Harry Potter").first()).toBeVisible();
    const sort = page.getByText('Más vendidos');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    //Ordenar: Rango de precios: dsc
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option4 = page.getByText('RANGO DE PRECIOS: dsc');
    await option4.waitFor({ state: 'visible' });
    await option4.click();
    await option4.click();
    await page.pause();
});

test('search-product:sort-default', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    await expect(clickSearch).toBeVisible();
    await page.waitForTimeout(1000);
    await clickSearch.fill("Harry Potter");
    await clickSearch.press('Enter');
    await expect(page.getByText("BUSCA POR Harry Potter").first()).toBeVisible();
    const sort = page.getByText('Más vendidos');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    //Ordenar: Orden predeterminado
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option5 = page.getByText('Orden predeterminado');
    await option5.waitFor({ state: 'visible' });
    await option5.click();
    await option5.click();
    await page.pause();
});

test('search-product:sort-new', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    await expect(clickSearch).toBeVisible();
    await page.waitForTimeout(1000);
    await clickSearch.fill("Harry Potter");
    await clickSearch.press('Enter');
    await expect(page.getByText("BUSCA POR Harry Potter").first()).toBeVisible();
    const sort = page.getByText('Más vendidos');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    //Ordenar: El más nuevo primero
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    const option6 = page.getByText('El más nuevo primero');
    await option6.waitFor({ state: 'visible' });
    await option6.click();
    await option6.click();
    await page.pause();
});

test('search-product:select-product', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    await expect(clickSearch).toBeVisible();
    await page.waitForTimeout(1000);
    await clickSearch.fill("Harry Potter");
    await clickSearch.press('Enter');
    await expect(page.getByText("BUSCA POR Harry Potter").first()).toBeVisible();
    //Ordenamiento
    const sort = page.getByText('Más vendidos');
    await sort.waitFor({ state: 'visible' });
    await sort.click();
    //Seleccionar primer producto
    const selectProduct = page.getByRole('link', { name: 'Draggable area Camiseta de' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

//PRODUCTO POPULAR
test('search-popular-product', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    await expect(page.locator("h3.sgm-search-products-title").first()).toContainText("Productos Populares");
    const selectProduct = page.getByRole('link', { name: 'chivas Jersey Chivas Hombre' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('search-category-tenis-black-for-woman', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    const itemHover = page.locator('li[data-url="https://mx.puma.com/colecciones/trending/tenis-negros/tenis-negros-para-mujer.html?_sgm_campaign=bs_category&_sgm_source=Colecciones+______+Trending+______+Tenis+Negros+______+Tenis+Negros+para+Mujer&_sgm_action=search&_sgm_term=&_sgm_pinned=false"]');    
    await itemHover.waitFor({ state: 'visible' });
    await itemHover.hover();
    await expect(page.locator("h3.sgm-search-products-title").first()).toContainText(" Tenis Negros Para Mujer");
    const selectProduct = page.getByRole('link', { name: 'tenis negros para mujer Botas' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('search-category-tenis-white-for-woman', async ({ page }) => {
    
    
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    const itemHover = page.locator('li[data-url="https://mx.puma.com/colecciones/trending/tenis-blancos/tenis-blancos-para-mujer.html?_sgm_campaign=bs_category&_sgm_source=Colecciones+______+Trending+______+Tenis+Blancos+______+White+Sneakers+for+Women&_sgm_action=search&_sgm_term=&_sgm_pinned=false"]');    
    await itemHover.waitFor({ state: 'visible' });
    await itemHover.hover();
    await expect(page.locator("h3.sgm-search-products-title").first()).toContainText(" White Sneakers For Women");
    const selectProduct = page.getByRole('link', { name: 'white sneakers for women Tenis para mujer Mayze Wedge Mex$2299.00 Mex$' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('search-category-recycling', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    const itemHover = page.locator('li[data-url="https://mx.puma.com/colecciones/trending/puma-por-el-planeta/recycling.html?_sgm_campaign=bs_category&_sgm_source=Colecciones+______+Trending+______+Puma+por+el+Planeta+______+Recycling&_sgm_action=search&_sgm_term=&_sgm_pinned=false"]');    
    await itemHover.waitFor({ state: 'visible' });
    await itemHover.hover();
    await expect(page.locator("h3.sgm-search-products-title").first()).toContainText(" Recycling");
    const selectProduct = page.getByRole('link', { name: 'recycling Explore NITRO Mid' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('search-category-lifestyle', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    const itemHover = page.locator('li[data-url="https://mx.puma.com/mujeres/calzado/lifestyle-casual.html?_sgm_campaign=bs_category&_sgm_source=Mujeres+______+Calzado+______+Lifestyle&_sgm_action=search&_sgm_term=&_sgm_pinned=false"]');    
    await itemHover.waitFor({ state: 'visible' });
    await itemHover.hover();
    await expect(page.locator("h3.sgm-search-products-title").first()).toContainText(" Lifestyle");
    const selectProduct = page.getByRole('link', { name: 'lifestyle Tenis PUMA-180' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('search-category-tenis-black-for-man', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    const itemHover = page.locator('li[data-url="https://mx.puma.com/colecciones/trending/tenis-negros/tenis-negros-para-hombre.html?_sgm_campaign=bs_category&_sgm_source=Colecciones+______+Trending+______+Tenis+Negros+______+Tenis+Negros+para+Hombre&_sgm_action=search&_sgm_term=&_sgm_pinned=false"]');    
    await itemHover.waitFor({ state: 'visible' });
    await itemHover.hover();
    await expect(page.locator("h3.sgm-search-products-title").first()).toContainText(" Tenis Negros Para Hombre");
    const selectProduct = page.getByRole('link', { name: 'tenis negros para hombre Tenis Suede Classic XXI Hombre Peacoat-Puma White High' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('search-word-popular-tenis', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    const itemHover = page.locator('li[data-url="/segmentifysearch?q=tenis"]');    
    await itemHover.waitFor({ state: 'visible' });
    await itemHover.hover();
    await expect(page.locator("h3.sgm-search-products-title").first()).toContainText("Tenis");
    const selectProduct = page.getByRole('link', { name: 'white sneakers for women' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('search-word-popular-puma', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    const itemHover = page.locator('li[data-url="/segmentifysearch?q=puma"]');    
    await itemHover.waitFor({ state: 'visible' });
    await itemHover.hover();
    await expect(page.locator("h3.sgm-search-products-title").first()).toContainText("Puma");
    const selectProduct = page.getByRole('link', { name: 'otoño puma Sudadera PUMA x' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('search-word-popular-ferrari', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    const itemHover = page.locator('li[data-url="/segmentifysearch?q=ferrari"]');    
    await itemHover.waitFor({ state: 'visible' });
    await itemHover.hover();
    await expect(page.locator("h3.sgm-search-products-title").first()).toContainText("Ferrari");
    const selectProduct = page.getByRole('link', { name: 'ferrari Pants Hombre Scuderia' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});

test('search-word-popular-palermo', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    const itemHover = page.locator('li[data-url="/segmentifysearch?q=palermo"]');    
    await itemHover.waitFor({ state: 'visible' });
    await itemHover.hover();
    await expect(page.locator("h3.sgm-search-products-title").first()).toContainText("Palermo");
    const selectProduct = page.getByRole('link', { name: 'palermo Tenis Palermo' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.pause();
});