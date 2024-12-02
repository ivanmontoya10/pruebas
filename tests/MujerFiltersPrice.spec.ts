import { test, expect, chromium } from '@playwright/test';

test('filter-price', async ({ page }) => {
  await page.goto('https://mx.puma.com/mujeres.html');

  const filterPrice = page.locator('button:has(span:has-text("Precio"))');
  await expect(filterPrice).toBeVisible();
  await filterPrice.click();

  // Localizar la pista del rango de precios
  const track = page.locator('.input-range__track--background');
  await expect(track).toBeVisible();

  // Obtener los valores mínimo y máximo
  const minPrice = 0;
  const maxPrice = 116000;
  const targetPrice = 3000;

  // Calcular la proporción de la posición para el valor objetivo (3000) dentro del rango
  const proportion = (targetPrice - minPrice) / (maxPrice - minPrice);

  // Obtener las dimensiones de la pista del rango de precios
  const boundingBox = await track.boundingBox();
  const clickX = boundingBox.x + boundingBox.width * proportion; // Calcular la posición X en la pista para el valor 3000
  const clickY = boundingBox.y + boundingBox.height / 2; // Posición en el centro vertical

  // Hacer clic en la posición calculada
  await page.mouse.click(clickX, clickY);

  const firstProduct = page.locator('ul.ProductListPage li.ProductCard').first();
  await expect(firstProduct).toBeVisible();

  const firstProductLink = firstProduct.locator('a.ProductCard-Link');
  await firstProductLink.click();

  await page.pause();  // Para observar el resultado
});