import { test, expect, chromium } from '@playwright/test';

test('HombreAddFilters', async ({ page }) => {
    await page.goto('https://mx.puma.com/hombres.html');

    const filterSex = page.locator('button:has(span:has-text("Sexo"))');
    await expect(filterSex).toBeVisible();
    await filterSex.click();

    const filterSexMujer = page.locator('label[for="Hombre"]');
    await expect(filterSexMujer).toBeVisible();
    await filterSexMujer.click();

    const filterSize = page.locator('button:has(span:has-text("Talla"))');
    await expect(filterSize).toBeVisible();
    await filterSize.click();

    const filterSizeM = page.locator('span[title="M"]');
    await expect(filterSizeM).toBeVisible();
    await filterSizeM.click();

    const filterColor = page.locator('button:has(span:has-text("Color"))');
    await expect(filterColor).toBeVisible();
    await filterColor.click();

    const filterColorBlack = page.locator('data[value="Negro"]');
    await expect(filterColorBlack).toBeVisible();
    await filterColorBlack.click();

    await page.pause();
});

test('HombreDeleteOneFilter', async ({ page }) => {
    await page.goto('https://mx.puma.com/hombres.html');

    const filterSex = page.locator('button:has(span:has-text("Sexo"))');
    await expect(filterSex).toBeVisible();
    await filterSex.click();

    const filterSexMujer = page.locator('label[for="Hombre"]');
    await expect(filterSexMujer).toBeVisible();
    await filterSexMujer.click();

    const filterSize = page.locator('button:has(span:has-text("Talla"))');
    await expect(filterSize).toBeVisible();
    await filterSize.click();

    const filterSizeM = page.locator('span[title="M"]');
    await expect(filterSizeM).toBeVisible();
    await filterSizeM.click();

    const filterColor = page.locator('button:has(span:has-text("Color"))');
    await expect(filterColor).toBeVisible();
    await filterColor.click();

    const filterColorBlack = page.locator('data[value="Negro"]');
    await expect(filterColorBlack).toBeVisible();
    await filterColorBlack.click();

    const clearFilterMujer = page.locator('div[role="button"]:has-text("Refinement Color: Negro")');
    await expect(clearFilterMujer).toBeVisible();
    await clearFilterMujer.click();

    await page.pause();
});

test('HombresDeleteFilters', async ({ page }) => {
    await page.goto('https://mx.puma.com/hombres.html');

    const filterSex = page.locator('button:has(span:has-text("Sexo"))');
    await expect(filterSex).toBeVisible();
    await filterSex.click();

    const filterSexMujer = page.locator('label[for="Hombre"]');
    await expect(filterSexMujer).toBeVisible();
    await filterSexMujer.click();

    const filterSize = page.locator('button:has(span:has-text("Talla"))');
    await expect(filterSize).toBeVisible();
    await filterSize.click();

    const filterSizeM = page.locator('span[title="M"]');
    await expect(filterSizeM).toBeVisible();
    await filterSizeM.click();

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