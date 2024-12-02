import { test, expect, chromium } from '@playwright/test';

test('select-BabyCatsNinos-Kids', async ({ page }) => {
    await page.goto('https://mx.puma.com/minicats');

    const babycatsButtonNinos = page.locator('xpath=//a[contains(@class, "trending-inline-item__button_1") and normalize-space(text())="NIÑOS"]');
    await expect(babycatsButtonNinos).toBeVisible();
    await babycatsButtonNinos.click();

    await expect(page).toHaveURL('https://mx.puma.com/ninos/ninos/edades-0-4-anos.html');


    await page.pause();  
});



test('select-product-BabyCatsNinos-kids0a4', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninos/edades-0-4-anos.html');

    const firstAllProducts = page.locator('.ProductList .ProductListPage .ProductCard a').first();
    await expect(firstAllProducts).toBeVisible();
    await firstAllProducts.click();

    await page.waitForSelector('h1.ProductActions-Title');

    const productTitle = page.locator('h1.ProductActions-Title');
    await expect(productTitle).toHaveText('Tenis BMW M Motorsport Caven 2.0 para niños pequeños');

    const productPrice = page.locator('span[itemprop="price"]');
    await expect(productPrice).toHaveText('624.50');

    const productColor = page.locator('.ProductConfigurableAttributes-ColorSubLabelValue');
    await expect(productColor).toHaveText('Puma White');

    await page.pause();
});

test('select-BabyCatsNinas-Kids', async ({ page }) => {
    await page.goto('https://mx.puma.com/minicats');

    const babycatsButtonNinas = page.locator('xpath=//a[contains(@class, "trending-inline-item__button_2") and normalize-space(text())="NIÑAS"]');
    await expect(babycatsButtonNinas).toBeVisible();
    await babycatsButtonNinas.click();

    await expect(page).toHaveURL('https://mx.puma.com/ninos/ninas/edades-0-4-anos.html');

    await page.pause();  
});



test('select-product-BabyCatsNinas-kids0a4', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninos/edades-0-4-anos.html');

    const firstAllProducts = page.locator('.ProductList .ProductListPage .ProductCard a').first();
    await expect(firstAllProducts).toBeVisible();
    await firstAllProducts.click();

    await page.waitForSelector('h1.ProductActions-Title');

    const productTitle = page.locator('h1.ProductActions-Title');
    await expect(productTitle).toHaveText('Tenis BMW M Motorsport Caven 2.0 para niños pequeños');

    const productPrice = page.locator('span[itemprop="price"]');
    await expect(productPrice).toHaveText('624.50');

    const productColor = page.locator('.ProductConfigurableAttributes-ColorSubLabelValue');
    await expect(productColor).toHaveText('Puma White');

    await page.pause();
});
