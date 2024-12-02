import { test, expect, chromium } from '@playwright/test';

test('filter-Size-Mini', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSizeMini = page.locator('span[title="Mini"]');
  await expect(filterSizeMini).toBeVisible();
  await filterSizeMini.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-XXS', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSizeXXS = page.locator('span[title="XXS"]');
  await expect(filterSizeXXS).toBeVisible();
  await filterSizeXXS.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-XS', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSizeXS = page.locator('span[title="XS"]');
  await expect(filterSizeXS).toBeVisible();
  await filterSizeXS.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-S', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSizeSmall = page.locator('span[title="S"]');
  await expect(filterSizeSmall).toBeVisible();
  await filterSizeSmall.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-SM', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSizeSM = page.locator('span[title="S/M"]');
  await expect(filterSizeSM).toBeVisible();
  await filterSizeSM.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-SizeM', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSizeM = page.locator('span[title="M"]');
  await expect(filterSizeM).toBeVisible();
  await filterSizeM.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-ML', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSizeML = page.locator('span[title="M/L"]');
  await expect(filterSizeML).toBeVisible();
  await filterSizeML.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-L', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSizeL = page.locator('span[title="L"]');
  await expect(filterSizeL).toBeVisible();
  await filterSizeL.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-LXL', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSizeLXL = page.locator('span[title="L/XL"]');
  await expect(filterSizeLXL).toBeVisible();
  await filterSizeLXL.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-XL', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSizeXL = page.locator('span[title="XL"]');
  await expect(filterSizeXL).toBeVisible();
  await filterSizeXL.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-XXL', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSizeXXL = page.locator('span[title="XXL"]');
  await expect(filterSizeXXL).toBeVisible();
  await filterSizeXXL.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-3XL', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize3XL = page.locator('span[title="3XL"]');
  await expect(filterSize3XL).toBeVisible();
  await filterSize3XL.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-5', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize5 = page.locator('span[title="5"]');
  await expect(filterSize5).toBeVisible();
  await filterSize5.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-6', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize6 = page.locator('span[title="6"]');
  await expect(filterSize6).toBeVisible();
  await filterSize6.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size7', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize7 = page.locator('span[title="7"]');
  await expect(filterSize7).toBeVisible();
  await filterSize7.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-8', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize8 = page.locator('span[title="8"]');
  await expect(filterSize8).toBeVisible();
  await filterSize8.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-9', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize9 = page.locator('span[title="9"]');
  await expect(filterSize9).toBeVisible();
  await filterSize9.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size10', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize10 = page.locator('span[title="10"]');
  await expect(filterSize10).toBeVisible();
  await filterSize10.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-22', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize22 = page.locator('span[title="22"]');
  await expect(filterSize22).toBeVisible();
  await filterSize22.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size225', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize225 = page.locator('span[title="22.5"]');
  await expect(filterSize225).toBeVisible();
  await filterSize225.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-23', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize23 = page.locator('span[title="23"]');
  await expect(filterSize23).toBeVisible();
  await filterSize23.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size235', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize235 = page.locator('span[title="23.5"]');
  await expect(filterSize235).toBeVisible();
  await filterSize235.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size24', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize24 = page.locator('span[title="24"]');
  await expect(filterSize24).toBeVisible();
  await filterSize24.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-245', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize245 = page.locator('span[title="24.5"]');
  await expect(filterSize245).toBeVisible();
  await filterSize245.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size25', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize25 = page.locator('span[title="25"]');
  await expect(filterSize25).toBeVisible();
  await filterSize25.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-255', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize255 = page.locator('span[title="25.5"]');
  await expect(filterSize255).toBeVisible();
  await filterSize255.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size26', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize26 = page.locator('span[title="26"]');
  await expect(filterSize26).toBeVisible();
  await filterSize26.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-265', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize265 = page.locator('span[title="26.5"]');
  await expect(filterSize265).toBeVisible();
  await filterSize265.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size27', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize27 = page.locator('span[title="27"]');
  await expect(filterSize27).toBeVisible();
  await filterSize27.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-275', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize275 = page.locator('span[title="27.5"]');
  await expect(filterSize275).toBeVisible();
  await filterSize275.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size28', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize28 = page.locator('span[title="28"]');
  await expect(filterSize28).toBeVisible();
  await filterSize28.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-285', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize285 = page.locator('span[title="28.5"]');
  await expect(filterSize285).toBeVisible();
  await filterSize285.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size29', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize29 = page.locator('span[title="29"]');
  await expect(filterSize29).toBeVisible();
  await filterSize29.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-295', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize295 = page.locator('span[title="29.5"]');
  await expect(filterSize295).toBeVisible();
  await filterSize295.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size30', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize30 = page.locator('span[title="30"]');
  await expect(filterSize30).toBeVisible();
  await filterSize30.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-31', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize31 = page.locator('span[title="31"]');
  await expect(filterSize31).toBeVisible();
  await filterSize31.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-32', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize32 = page.locator('span[title="32"]');
  await expect(filterSize32).toBeVisible();
  await filterSize32.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-Unica', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSizeUnica = page.locator('span[title="Única"]');
  await expect(filterSizeUnica).toBeVisible();
  await filterSizeUnica.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-Adultos', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSizeAdultos = page.locator('span[title="Adultos"]');
  await expect(filterSizeAdultos).toBeVisible();
  await filterSizeAdultos.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size79', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize79 = page.locator('span[title="7-9"]');
  await expect(filterSize79).toBeVisible();
  await filterSize79.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-6y', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize6Y = page.locator('span[title="6 Y"]');
  await expect(filterSize6Y).toBeVisible();
  await filterSize6Y.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-8y', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize8Y = page.locator('span[title="8 Y"]');
  await expect(filterSize8Y).toBeVisible();
  await filterSize8Y.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-10y', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize10Y = page.locator('span[title="10 Y"]');
  await expect(filterSize10Y).toBeVisible();
  await filterSize10Y.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size12y', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize12Y = page.locator('span[title="12 Y"]');
  await expect(filterSize12Y).toBeVisible();
  await filterSize12Y.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size14y', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize14Y = page.locator('span[title="14 Y"]');
  await expect(filterSize14Y).toBeVisible();
  await filterSize14Y.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-32C', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize32C = page.locator('span[title="32C"]');
  await expect(filterSize32C).toBeVisible();
  await filterSize32C.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-32D', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize32D = page.locator('span[title="32D"]');
  await expect(filterSize32D).toBeVisible();
  await filterSize32D.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-34A', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize34A = page.locator('span[title="34A"]');
  await expect(filterSize34A).toBeVisible();
  await filterSize34A.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-34D', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize34D = page.locator('span[title="34D"]');
  await expect(filterSize34D).toBeVisible();
  await filterSize34D.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-36A', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize36A = page.locator('span[title="36A"]');
  await expect(filterSize36A).toBeVisible();
  await filterSize36A.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-36C', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize36C = page.locator('span[title="36C"]');
  await expect(filterSize36C).toBeVisible();
  await filterSize36C.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-36D', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize34D = page.locator('span[title="36D"]');
  await expect(filterSize34D).toBeVisible();
  await filterSize34D.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-38A', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize38A = page.locator('span[title="38A"]');
  await expect(filterSize38A).toBeVisible();
  await filterSize38A.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-UA', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSizeUA = page.locator('span[title="UA"]');
  await expect(filterSizeUA).toBeVisible();
  await filterSizeUA.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});

test('filter-Size-5-75', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterSize = page.locator('button:has(span:has-text("Talla"))');
  await expect(filterSize).toBeVisible();
  await filterSize.click();

  const filterSize575 = page.locator('span[title="5-7.5"]');
  await expect(filterSize575).toBeVisible();
  await filterSize575.click();

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();
});
