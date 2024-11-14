import { test, expect } from '@playwright/test';

test('test2', async({ page })=>{
  await page.goto('https://www.amazon.com.mx/');
  await expect(page).toHaveTitle(/Amazon.com.mx: Precios bajos - Envío rápido - Millones de productos/);
  const searchInput = page.locator("input[id='twotabsearchtextbox']");
  await expect(searchInput).toBeVisible();
  await searchInput.fill("xbox");
  await page.keyboard.press('Enter');
  await expect(page).toHaveTitle(/Amazon.com.mx : xbox/);
  await expect(page.locator("span[class='a-color-state a-text-bold']")).toContainText("xbox")
  await expect(page.locator("h2[class='a-size-medium-plus a-spacing-none a-color-base a-text-bold']")).toContainText("Resultados")
  await expect(page.locator("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1']")).toBeVisible();
  const first = page.locator("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1']");
  await expect(first).toBeVisible();
  await first.waitFor({ state: 'visible' });
  await expect(first.locator("span[class='a-size-base-plus a-color-base a-text-normal']")).toHaveText("Xbox Consola Series S digital de 512 GB - Robot White - Nacional Edition")
  await first.locator("span[class='a-size-base-plus a-color-base a-text-normal']").click()
  const buyInput = page.locator("input[id='add-to-cart-button']")
  await buyInput.click();
  await page.pause()
});