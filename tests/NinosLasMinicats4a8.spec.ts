import { test, expect, chromium } from '@playwright/test';

test('select-MinicatsNina-Kids', async ({ page }) => {
    await page.goto('https://mx.puma.com/minicats');

    const minicatsSection = page.locator('xpath=//div[normalize-space(text())="LAS MINICATS"]');
    await expect(minicatsSection).toBeVisible();

    const buyButton = minicatsSection.locator('xpath=ancestor::div[contains(@class,"trending-inline-item__title-w")]/following-sibling::div[@class="trending-inline-item__buttons"]/a[@class="btn btn_content trending-inline-item__button trending-inline-item__button_1"]');
    await expect(buyButton).toBeVisible();
    await buyButton.click();

    await expect(page).toHaveURL('https://mx.puma.com/ninos/ninas/edades-4-8-anos.html?page=1');

    await page.pause();  
});



test('select-product-MinicatsNina-kids4a8', async ({ page }) => {
    await page.goto('https://mx.puma.com/ninos/ninos/edades-4-8-anos.html');

    const firstAllProducts = page.locator('.ProductList .ProductListPage .ProductCard a').first();
    await expect(firstAllProducts).toBeVisible();
    await firstAllProducts.click();

    await page.waitForSelector('h1.ProductActions-Title');

    const productTitle = page.locator('h1.ProductActions-Title');
    await expect(productTitle).toHaveText('Tenis para niños pequeños Mercedes-AMG Petronas F1® Caven 2.0 AC+');

    const productPrice = page.locator('span[itemprop="price"]');
    await expect(productPrice).toHaveText('724.50');

    const productColor = page.locator('.ProductConfigurableAttributes-ColorSubLabelValue');
    await expect(productColor).toHaveText('PUMA White-Sheen Green');

    await page.pause();
});

