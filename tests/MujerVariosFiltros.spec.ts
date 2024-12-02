import { test, expect, chromium } from '@playwright/test';

test('addFilters', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');

    const filterSex = page.locator('button:has(span:has-text("Sexo"))');
    await expect(filterSex).toBeVisible();
    await filterSex.click();

    const filterSexMujer = page.locator('label[for="Mujer"]');
    await expect(filterSexMujer).toBeVisible();
    await filterSexMujer.click();

    const filterSize = page.locator('button:has(span:has-text("Talla"))');
    await expect(filterSize).toBeVisible();
    await filterSize.click();

    const filterSizeM = page.locator('span[title="M"]');
    await expect(filterSizeM).toBeVisible();
    await filterSizeM.click();

    await page.pause();
});

test('deleteOneFilter', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');

    const filterSex = page.locator('button:has(span:has-text("Sexo"))');
    await expect(filterSex).toBeVisible();
    await filterSex.click();

    const filterSexMujer = page.locator('label[for="Mujer"]');
    await expect(filterSexMujer).toBeVisible();
    await filterSexMujer.click();

    const filterSize = page.locator('button:has(span:has-text("Talla"))');
    await expect(filterSize).toBeVisible();
    await filterSize.click();

    const filterSizeM = page.locator('span[title="M"]');
    await expect(filterSizeM).toBeVisible();
    await filterSizeM.click();

    const clearFilterMujer = page.locator('div[role="button"]:has-text("Sexo: Mujer")');
    await expect(clearFilterMujer).toBeVisible();
    await clearFilterMujer.click();

    await page.pause();
});

test('deleteFilters', async ({ page }) => {
    await page.goto('https://mx.puma.com/mujeres.html');

    const filterSex = page.locator('button:has(span:has-text("Sexo"))');
    await expect(filterSex).toBeVisible();
    await filterSex.click();

    const filterSexMujer = page.locator('label[for="Mujer"]');
    await expect(filterSexMujer).toBeVisible();
    await filterSexMujer.click();

    const filterSize = page.locator('button:has(span:has-text("Talla"))');
    await expect(filterSize).toBeVisible();
    await filterSize.click();

    const filterSizeM = page.locator('span[title="M"]');
    await expect(filterSizeM).toBeVisible();
    await filterSizeM.click();

    const clearFilter = page.locator('div[role="button"]:has-text("Borrar filtro")');
    await expect(clearFilter).toBeVisible();
    await clearFilter.click();

    await page.pause();
});